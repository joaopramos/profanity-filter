const profanityFilter = require("./profanity-filter");

describe("profanity filter implementation", () => {
  test("should accept an array of swearwords and replace equal num of chars - example 1", () => {
    const swearwords = ["hate", "fudgesicles"];
    const tweet = "I bleeping hate those fudgesicles.";

    expect(profanityFilter(swearwords, tweet)).toBe("I bleeping *&#$ those *&#$%*&#$%*.");
  });

  test("should ignore casing - example 2", () => {
    const swearwords = ["fricking"];
    const tweet = "I cannot eat another FRICKing meatball!";

    expect(profanityFilter(swearwords, tweet)).toBe("I cannot eat another *&#$%*&# meatball!");
  });

  test("should not censor if the swearword is a part of a word - example 3", () => {
    const swearwords = ["fruit"];
    const tweet = "I wonder how much fruit? is actually in fruitcake?";

    expect(profanityFilter(swearwords, tweet)).toBe("I wonder how much *&#$%? is actually in fruitcake?");
  });

  test("should accept multiline text and not be affected by punctuation - example 4", () => {
    const swearwords = ["COUNT"];
    const tweet = `
You know that I am called the Count
Because I really love to count
I could sit and count all day
Sometimes I get carried away
I count slowly, slowly, slowly getting faster
Once I've started to count it's really hard to stop
Faster, faster. It is so exciting!
I could count forever, count until I drop
1! 2! 3! 4!
1-2-3-4, 1-2-3-4,
1-2, i love to count whatever the ammount haha!
1-2-3-4, heyyayayay heyayayay that's the sound of the count!
I count the spiders on the wall.
I count the cobwebs in the hall.
I count the candles on the shelf.
When I'm alone, I count myself!
I count slowly, slowly, slowly getting faster
Once I've started to count it's really hard to stop
Faster, faster. It is so exciting!
I could count forever, count until I drop
1! 2! 3! 4!
1-2-3-4, 1-2-3-4, 1,
2 I love to count whatever the
Ammount! 1-2-3-4 heyayayay heayayay 1-2-3-4
That's the song of the Count!`;
    const result = `
You know that I am called the *&#$%
Because I really love to *&#$%
I could sit and *&#$% all day
Sometimes I get carried away
I *&#$% slowly, slowly, slowly getting faster
Once I've started to *&#$% it's really hard to stop
Faster, faster. It is so exciting!
I could *&#$% forever, *&#$% until I drop
1! 2! 3! 4!
1-2-3-4, 1-2-3-4,
1-2, i love to *&#$% whatever the ammount haha!
1-2-3-4, heyyayayay heyayayay that's the sound of the *&#$%!
I *&#$% the spiders on the wall.
I *&#$% the cobwebs in the hall.
I *&#$% the candles on the shelf.
When I'm alone, I *&#$% myself!
I *&#$% slowly, slowly, slowly getting faster
Once I've started to *&#$% it's really hard to stop
Faster, faster. It is so exciting!
I could *&#$% forever, *&#$% until I drop
1! 2! 3! 4!
1-2-3-4, 1-2-3-4, 1,
2 I love to *&#$% whatever the
Ammount! 1-2-3-4 heyayayay heayayay 1-2-3-4
That's the song of the *&#$%!`;

    expect(profanityFilter(swearwords, tweet)).toBe(result);
  });
});
