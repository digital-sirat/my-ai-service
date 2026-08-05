import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
const root = resolve(process.cwd(), 'src/integrations/workspace/commercial-domain');
const files = readdirSync(root).filter(name => name.endsWith('.ts'));
const source = files.map(name => readFileSync(resolve(root, name), 'utf8')).join('\n');
describe('Commercial domain architecture', () => {
  it('contains no I/O, browser, storage, telemetry or provider dependencies', () => { expect(source).not.toMatch(/fetch|axios|WebSocket|XMLHttpRequest|window|document|localStorage|sessionStorage|telemetry|analytics|oauth/i); expect(source).not.toMatch(/stripe|paddle|lemon.?squeezy|wallet sdk|provider payload/i); expect(source).not.toMatch(/@\/(store|api|backend|router|navigation|components|pages|layouts|operators)/); });
  it('forbids sensitive and unrestricted transport fields', () => { expect(source).not.toMatch(/cardNumber|\bcvv\b|seedPhrase|mnemonic|privateKey|\bsecret\b|\bjwt\b|accessToken|refreshToken|providerPayload|\bmetadata\b/i); });
  it('keeps source contracts implementation-free', () => { const contracts = readFileSync(resolve(root, 'contracts.ts'), 'utf8'); expect(contracts).not.toMatch(/\bclass\b|fetch\(|axios|=>/); });
});
