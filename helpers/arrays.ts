// prints indices above array.
export const idxPrinter2 = <T>(array: T[], indices: number[]) => {
  const sortedIndices = indices.sort();
  const indicesString = sortedIndices.map((x, i) => {
    const difference = i > 0 ? x - sortedIndices[i - 1] : 1;
    return (
      " ".repeat(2 * difference + difference - 1) + ["i", "j", "k", "h"][i]
    );
  });
  return `${indicesString.join("")}\n[ ${array.join(", ")} ]`;
};

export const idxPrinter = <T>(arr: T[], indices: number[]) => {
  const t = new Array(5 + 3 + (arr.length - 1)).fill(" ");
  indices.forEach((x, i) => {
    t[2 + x * 3] = ["i", "j", "k", "h"][i];
  });
  return `${t.join("")}\n[ ${arr.join(", ")} ]`;
};
