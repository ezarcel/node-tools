export interface CompareObjectsSettings {
  arrayStrict?: boolean;
  deep?: boolean;
  missing?: "none" | "one-direction" | "both-directions";
}
export function compare(
  fullObj: Record<any, any>,
  partialObj: Record<any, any>,
  {
    arrayStrict = true,
    deep = true,
    missing = "one-direction",
  }: CompareObjectsSettings = {
    arrayStrict: true,
    deep: true,
    missing: "one-direction",
  }
): boolean {
  const fullE = Object.entries(fullObj);
  const partialE = Object.entries(partialObj);

  if (
    (missing === "one-direction" &&
      partialE.some((e) => !fullE.map((f) => f[0]).includes(e[0]))) ||
    (missing === "both-directions" && fullE.length !== partialE.length)
  )
    return false;

  return fullE.every(([key, value1]) => {
    if (missing && !(key in partialObj)) return true;
    const value2 = partialObj[key];

    if (typeof value1 !== typeof value2) return false;

    if (typeof value1 === "object") {
      if (Array.isArray(value1)) {
        if (arrayStrict)
          return value1.length !== value2.length
            ? false
            : value1.every((e) => value2.includes(e));
        else return value1.some((e) => value2.includes(e));
      } else return deep ? compare(value1, value2) : value1 === value2;
    } else if (typeof value1 === "function")
      return value1 === value2 || value1.toString() === value2.toString();
    else return value1 === value2;
  });
}
