function fillCensoredWord(nChars) {
  const censoredString = "*&#$%";

  return Array.apply(null, Array(nChars))
    .map((char, idx) => censoredString[idx % censoredString.length])
    .join("");
}

function profanityFilter(swearwords, originalTweet) {
  return swearwords.reduce((censored, swearword) => {
    const regex = new RegExp(String.raw`\b${swearword}\b`, "ig");
    return censored.replace(regex, fillCensoredWord(swearword.length));
  }, originalTweet);
}

module.exports = profanityFilter;
