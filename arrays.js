"use strict";


// 1. printIndices
function printIndices(items) {
  let i=0;
  for (const item of items){
    console.log(`${item} ${i}`);
    i += 1;
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  let result = []
  for (let i in items){
    if (i % 2 === 0){
      result.push(items[i]);
    }
  }
  return result
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // ([4, 22, 75, 9, 67], 2) => [9,4]
  // 4, 9, 22, 67, 75
  // 0, 1
  // 4, 9
  // 9,4

  items.sort((a, b) => a - b);
  let sortedItems = items.slice(0, n).reverse()
  return sortedItems

}
