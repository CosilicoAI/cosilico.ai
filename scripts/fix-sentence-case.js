#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Words/phrases that should stay capitalised
const PRESERVE_CAPS = new Set([
  // Acronyms (2+ capitals)
  'API', 'APIs', 'UK', 'US', 'USA', 'IRS', 'DSL', 'EITC', 'CTC', 'SNAP', 'TANF',
  'SSI', 'USC', 'GDP', 'CPI', 'WASM', 'SQL', 'CSS', 'HTML', 'JSON', 'XML',
  'NBER', 'CPS', 'PUF', 'ASEC', 'SOI', 'NND', 'MAF', 'OBR', 'ONS', 'FRS',
  'CAGR', 'ARR', 'ERP', 'SLA', 'MIT', 'AI', 'ML', 'LLM', 'LLMs', 'PRs',
  'GPT', 'TDD', 'CI', 'CD', 'AR', 'KL', 'UBI', 'DAG', 'R2', 'FICA', 'HM',
  // Company/product names
  'GitHub', 'PolicyEngine', 'OpenFisca', 'TAXSIM', 'MongoDB', 'GitLab',
  'Cosilico', 'Supabase', 'Postgres', 'PostgreSQL', 'PyTorch', 'AlphaLaw',
  'Cloudflare', 'Mahalanobis', 'Gower', 'Frechet', 'Bayesian', 'Thompson',
  'Medicaid', 'Medicare',
  // Proper nouns - countries, places, people, laws
  'United', 'States', 'Kingdom', 'America', 'American', 'Britain', 'British',
  'Census', 'Bureau', 'Treasury', 'Congress', 'Congressional',
  'Internal', 'Revenue', 'Code',  // "Internal Revenue Code"
  'Max', 'Ghenis', 'Nikhil', 'Woodruff',
  // Rev. Proc. abbreviation
  'Rev', 'Proc'
]);

// Check if a word should preserve its capitalisation
function shouldPreserveCaps(word) {
  // Remove leading and trailing punctuation
  const cleanWord = word.replace(/^[.,!?;:'"()[\]{}]+/, '').replace(/[.,!?;:'"()[\]{}]+$/, '');
  // Preserve if in list or if ALL CAPS (2+ letters)
  return PRESERVE_CAPS.has(cleanWord) || /^[A-Z]{2,}$/.test(cleanWord);
}

// Convert to sentence case
function toSentenceCase(text) {
  if (!text || text.trim().length === 0) return text;

  // Split into words
  const words = text.split(/(\s+)/);
  let isFirstWord = true;

  return words.map((word, i) => {
    // Skip whitespace
    if (/^\s+$/.test(word)) return word;

    // Preserve acronyms and proper nouns
    if (shouldPreserveCaps(word)) {
      isFirstWord = false;
      return word;
    }

    // First word gets capitalised
    if (isFirstWord) {
      isFirstWord = false;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    // Rest are lowercase
    return word.toLowerCase();
  }).join('');
}

// Check if text is likely Title Case (has 2+ consecutive capitalised words)
function isTitleCase(text) {
  if (!text || text.trim().length === 0) return false;

  const words = text.trim().split(/\s+/);
  let consecutiveCaps = 0;

  for (const word of words) {
    const cleanWord = word.replace(/[.,!?;:'"()[\]{}]+$/, '');
    if (cleanWord.length === 0) continue;

    // Skip if it's a preserved word
    if (shouldPreserveCaps(cleanWord)) continue;

    // Check if word starts with capital
    if (/^[A-Z]/.test(cleanWord) && cleanWord.length > 1) {
      consecutiveCaps++;
      if (consecutiveCaps >= 2) return true;
    } else {
      consecutiveCaps = 0;
    }
  }

  return false;
}

// Find Title Case instances in a file
function findTitleCaseInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // Match text in heading tags, button text, span/div text
  // Pattern: >Text Content< or >Text Content</tag>
  const patterns = [
    /<h[1-6][^>]*>([^<]+)<\/h[1-6]>/g,
    /<button[^>]*>([^<]+)<\/button>/g,
    /<a[^>]*>([^<]+)<\/a>/g,
    />\s*([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\s*</g,  // General Title Case pattern
    /title[=:]?\s*["']([^"']+)["']/g,  // title attributes
    /label[=:]?\s*["']([^"']+)["']/g,  // label attributes
  ];

  const lines = content.split('\n');

  lines.forEach((line, lineNum) => {
    // Skip comments and imports
    if (line.trim().startsWith('//') || line.trim().startsWith('import')) return;

    for (const pattern of patterns) {
      pattern.lastIndex = 0;
      let match;
      while ((match = pattern.exec(line)) !== null) {
        const text = match[1];
        if (isTitleCase(text)) {
          const fixed = toSentenceCase(text);
          if (fixed !== text) {
            issues.push({
              line: lineNum + 1,
              original: text,
              fixed: fixed,
              context: line.trim().substring(0, 100)
            });
          }
        }
      }
    }
  });

  return issues;
}

// Fix Title Case in file content
function fixTitleCaseInFile(filePath, dryRun = true) {
  let content = fs.readFileSync(filePath, 'utf8');
  let fixes = 0;

  // Pattern to match heading content
  const headingPattern = /(<h[1-6][^>]*>)([^<]+)(<\/h[1-6]>)/g;

  content = content.replace(headingPattern, (match, open, text, close) => {
    if (isTitleCase(text)) {
      const fixed = toSentenceCase(text);
      if (fixed !== text) {
        fixes++;
        if (!dryRun) {
          return open + fixed + close;
        }
      }
    }
    return match;
  });

  if (!dryRun && fixes > 0) {
    fs.writeFileSync(filePath, content);
  }

  return fixes;
}

// Main
const srcDir = path.join(__dirname, '..', 'src');
const files = glob.sync('**/*.tsx', { cwd: srcDir });
const doFix = process.argv.includes('--fix');

let totalIssues = 0;

console.log(doFix ? 'Fixing Title Case issues...\n' : 'Scanning for Title Case issues (use --fix to apply)...\n');

for (const file of files) {
  const filePath = path.join(srcDir, file);
  const issues = findTitleCaseInFile(filePath);

  if (issues.length > 0) {
    console.log(`\n📄 ${file}`);
    for (const issue of issues) {
      console.log(`  Line ${issue.line}: "${issue.original}" → "${issue.fixed}"`);
    }
    totalIssues += issues.length;

    if (doFix) {
      fixTitleCaseInFile(filePath, false);
    }
  }
}

console.log(`\n\nTotal issues ${doFix ? 'fixed' : 'found'}: ${totalIssues}`);
