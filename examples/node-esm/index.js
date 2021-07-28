import { init, compress, decompress } from '@bokuweb/zstd-wasm';

(async () => {
  await init();
  const compressed = compress(Buffer.from('Hello zstd!!'), 10);
  const res = decompress(compressed);
  console.log(Buffer.from(res).toString());
})();
