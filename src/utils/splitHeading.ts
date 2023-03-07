import makeUpperCase from "./makeUpperCase";

function splitHeading(string: string, numOfWords: number) {
  const words = makeUpperCase(string).split(" ");
  const split = words.slice(0, numOfWords).join(" ");
  const rest = words.slice(numOfWords).join(" ");

  return [split, rest];
}

export default splitHeading;
