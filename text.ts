export type PaddingAlignment = "center" | "left" | "right";
export interface PaddingStringOptions {
  alignment?: PaddingAlignment;
  length: number;
}
export function padding(input: string, options?: PaddingStringOptions);
export function padding(input: number, length: number);
export function padding(
  input: string | number,
  optionsOrLength?: PaddingStringOptions | number
) {
  if (typeof input === "string") {
    const { alignment = "left", length = input.length } = <
      PaddingStringOptions
    >optionsOrLength;
    if (alignment === "center")
      return (
        " ".repeat(Math.floor((length - input.length) / 2)) +
        input +
        " ".repeat(Math.ceil((length - input.length) / 2))
      );
    else if (alignment === "left")
      return input + " ".repeat(length - input.length);
    else if (alignment === "right")
      return " ".repeat(length - input.length) + input;
  } else {
    return `${input < 10 ** (length - 1) ? 0 : ""}${input}`;
  }
}
