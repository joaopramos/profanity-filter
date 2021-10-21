function fillCensoredWord(nChars) {
  const censoredString = "*&#$%";

  return Array.apply(null, Array(nChars))
    .map((char, idx) => censoredString[idx % censoredString.length])
    .join("");
}

function profanityFilter(text) {
  const firstLine = text.match(/^.*\n/)[0];
  const swearwords = firstLine.trim().split(" ");
  const tweet = text.substring(firstLine.length);

  return swearwords.reduce((censored, swearword) => {
    const regex = new RegExp(String.raw`\b${swearword}\b`, "ig");
    return censored.replace(regex, fillCensoredWord(swearword.length));
  }, tweet);
}

module.exports = profanityFilter;
