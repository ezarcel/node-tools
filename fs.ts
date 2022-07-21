import fs from "fs-extra";

export const fileExists = (path: string) => {
  try {
    return fs.statSync(path).isFile();
  } catch (e) {
    return false;
  }
};
export const dirExists = (path: string) => {
  try {
    return fs.statSync(path).isDirectory();
  } catch (e) {
    return false;
  }
};
