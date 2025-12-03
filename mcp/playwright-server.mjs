// Minimal MCP server exposing browser automation via Playwright.
// Note: This is a basic, single-session server intended for local use.
import { chromium } from 'playwright';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/transport/stdiotransport';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';

let browser;
let page;

async function ensureBrowser() {
  if (!browser) {
    browser = await chromium.launch({ headless: process.env.HEADLESS !== 'false' });
    const context = await browser.newContext();
    page = await context.newPage();
  }
  return page;
}

const server = new Server({
  name: 'cosilico-playwright-mcp',
  version: '0.1.0',
});

server.tool('goto', {
  description: 'Navigate to a URL',
  inputSchema: {
    type: 'object',
    properties: { url: { type: 'string' } },
    required: ['url'],
  },
  handler: async ({ url }) => {
    const p = await ensureBrowser();
    await p.goto(url);
    return { ok: true };
  },
});

server.tool('click', {
  description: 'Click an element by text or selector',
  inputSchema: {
    type: 'object',
    properties: { text: { type: 'string' }, selector: { type: 'string' } },
  },
  handler: async ({ text, selector }) => {
    const p = await ensureBrowser();
    if (selector) {
      await p.click(selector);
    } else if (text) {
      await p.getByText(text, { exact: true }).click();
    } else {
      throw new Error('Provide text or selector');
    }
    return { ok: true };
  },
});

server.tool('fill', {
  description: 'Fill into an input/textarea by selector',
  inputSchema: { type: 'object', properties: { selector: { type: 'string' }, value: { type: 'string' } }, required: ['selector', 'value'] },
  handler: async ({ selector, value }) => {
    const p = await ensureBrowser();
    await p.fill(selector, value);
    return { ok: true };
  },
});

server.tool('text', {
  description: 'Extract page text content for a selector',
  inputSchema: { type: 'object', properties: { selector: { type: 'string' } }, required: ['selector'] },
  handler: async ({ selector }) => {
    const p = await ensureBrowser();
    const content = await p.textContent(selector);
    return { content };
  },
});

server.tool('screenshot', {
  description: 'Take a PNG screenshot of the page',
  inputSchema: { type: 'object', properties: { fullPage: { type: 'boolean' } } },
  handler: async ({ fullPage = true }) => {
    const p = await ensureBrowser();
    const buffer = await p.screenshot({ fullPage });
    return { base64: buffer.toString('base64') };
  },
});

server.tool('assert', {
  description: 'Assert that text appears on the page',
  inputSchema: { type: 'object', properties: { text: { type: 'string' } }, required: ['text'] },
  handler: async ({ text }) => {
    const p = await ensureBrowser();
    await p.getByText(text).waitFor();
    return { ok: true };
  },
});

process.on('SIGINT', async () => { if (browser) await browser.close(); process.exit(0); });
process.on('SIGTERM', async () => { if (browser) await browser.close(); process.exit(0); });

const transport = new StdioServerTransport();
await server.connect(transport);

