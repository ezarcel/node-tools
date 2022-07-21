import * as p from "path";
import { fileURLToPath } from "url";

export function isMain(meta: ImportMeta) {
  const metaPath = fileURLToPath(meta.url);
  const metaPathNoExtension = metaPath.slice(0, -p.extname(metaPath).length);
  return [metaPath, metaPathNoExtension].includes(process.argv[1]);
}
