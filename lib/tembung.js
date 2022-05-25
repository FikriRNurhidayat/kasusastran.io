const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const alphabetSize = alphabets.length;

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function capitalize(value) {
  let text = value.split("");
  text[0] = text[0].toUpperCase();
  return text.join("");
}

export function getRandomCharacter(blacklist) {
  const result = alphabets[getRandomInt(0, alphabetSize)];
  return (result !== blacklist && result) || getRandomCharacter();
}

export function generateWord() {
  const length = getRandomInt(3, 16);
  let chars = [];

  for (let i = 0; i < length; i++) {
    const char = alphabets[getRandomInt(0, alphabetSize)];
    chars.push(char);
  }

  const result = chars.join("");
  return result === "" ? generateWord() : result;
}

export function generateTitle() {
  const length = getRandomInt(2, 6);
  let words = [];

  for (let i = 0; i < length; i++) {
    const word = capitalize(generateWord());
    words.push(word);
  }

  return words.join(" ");
}

export function generateSentence(min = 3, max = 7) {
  const seed = getRandomInt(0, 1) === 1;
  let length = getRandomInt(min, max);

  if (seed) {
    const word = [];
    for (let i = 0; i < length; i++) {
      word.push(generateWord());
    }

    return word.join(" ");
  } else {
    const sentence = [];
    let word = [];
    for (let i = 0; i < length; i++) {
      word.push(generateWord());
    }

    sentence.push(word.join(" "));

    length = getRandomInt(3, 7);
    word = [];
    for (let i = 0; i < length; i++) {
      word.push(generateWord());
    }

    sentence.push(word.join(" "));
    return sentence.join(", ");
  }
}

export function generateParagraph() {
  const length = getRandomInt(5, 10);
  const sentences = [];

  for (let i = 0; i < length; i++) {
    sentences.push(capitalize(generateSentence()));
  }

  return sentences.join(". ");
}

export function generateEssay() {
  const length = getRandomInt(5, 10);
  const paragraphs = [];

  for (let i = 0; i < length; i++) {
    paragraphs.push(generateParagraph());
  }

  return paragraphs.map((i) => `<p>${i}</p>`).join("");
}

export function generateImageURL() {
  const x = getRandomInt(320, 640);
  const y = getRandomInt(320, 720);
  return `https://source.unsplash.com/${x}x${y}`;
}
