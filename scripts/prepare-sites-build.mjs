import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/server', { recursive: true });
await cp('build', 'dist/client', { recursive: true });
await cp('sites/worker.js', 'dist/server/index.js');
