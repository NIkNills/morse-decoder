const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arr = [];

  for (let start = 0; start < expr.length; start += 10) {
    let end = start + 10;

    arr.push(expr.slice(start, end));
  }

  const morseArr = arr.map((item) => {
    let letter = "";

    if (item === "**********") {
      return (letter = " ");
    }

    for (let i = 0; i < item.length; i += 2) {
      if (item[i] === "1" && item[i + 1] === "0") {
        letter += ".";
      } else if (item[i] === "1" && item[i + 1] === "1") {
        letter += "-";
      }
    }

    return letter;
  });

  return morseArr
    .map((i) => {
      if (i in MORSE_TABLE) {
        return MORSE_TABLE[i];
      } else {
        return " ";
      }
    })
    .join("");
}

module.exports = {
  decode,
};
