// prints indices above array.
export const idxPrinter = <T>(arr: T[], indices: number[]) => {
  const t = new Array(5 + 3 * (arr.length - 1)).fill(" ");
  indices.forEach((x, i) => {
    t[2 + x * 3] = ["i", "j", "k", "h"][i];
  });
  return `${t.join("")}\n[ ${arr.join(", ")} ]`;
};
