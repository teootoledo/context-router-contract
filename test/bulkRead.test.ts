import test from 'node:test';
import assert from 'node:assert/strict';
import { BulkReadRequestSchema, BulkReadResponseSchema } from '../src/bulkRead.ts';

test('BulkReadRequestSchema accepts a valid request', () => {
  const parsed = BulkReadRequestSchema.parse({
    query: 'does this file handle retries?',
    files: [{ path: 'src/client.ts', content: 'export function fetchWithRetry() {}' }],
  });
  assert.equal(parsed.query, 'does this file handle retries?');
  assert.equal(parsed.files.length, 1);
});

test('BulkReadRequestSchema rejects an empty files array', () => {
  assert.throws(() =>
    BulkReadRequestSchema.parse({ query: 'x', files: [] }),
  );
});

test('BulkReadResponseSchema accepts a summary string', () => {
  const parsed = BulkReadResponseSchema.parse({ summary: '- client.ts: retries via exponential backoff' });
  assert.equal(typeof parsed.summary, 'string');
});
