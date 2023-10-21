export const debugPrint = (
  value: string,
  level: "DEBUG" | "WARNING" | "ERROR" = "DEBUG"
) => {
  if (process.env.DEBUG === level) {
    console.log(value);
  }
};

export const expectationPrint = (result: string, expectation: string) => {
  debugPrint(`${result}\n${expectation}`);
};
