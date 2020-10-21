"use strict";


// 1. countWords
function countWords(phrase) {

  let wordCounts = {};

  const words = phrase.split(' ');

  for (const word of words){
    if (!wordCounts[word]){
      wordCounts[word] = 1;
    } else {
      wordCounts[word] += 1;
    }
  }

  return wordCounts
}
//"CA" in states - > Python
//states.includes('CA'); -> JS

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
};
  if (!melonPrices[price]){
    return;
  }
  return melonPrices[price].sort();
};
