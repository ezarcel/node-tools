/**
 * @param {number} [min] The minimum number
 * @param {number} [max] The maximum number
 * @returns A pseudorandom number
 */
export function random(): number;
export function random(min: number, max: number): number;
export function random(min: number = 0, max: number = 1): number {
  return Math.random() * (max - min) + min;
}

/**
 * Effortless range checker
 * @param {number} num The number to check
 * @param {number} min Where the range starts
 * @param {number} max Where the range ends
 * @param {"open" | "closed" | "open-closed" | "closed-open"} [type] The type of range (optional, default: ```"closed"```)
 * @returns A boolean
 */
export function isInRange(
  num: number,
  min: number,
  max: number,
  type: "open" | "closed" | "open-closed" | "closed-open" = "closed"
): boolean {
  if (type === "open") return num < max && num > min;
  else if (type === "closed") return num <= max && num >= min;
  else if (type === "open-closed") return num < max && num >= min;
  else if (type === "closed-open") return num <= max && num > min;
  return true;
}
