//Task #1

export function getItem(cards, position) {
  return cards[position];
}

//Task #2
export function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
}

//Task #3
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

//Task #4
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

//Task #5
export function removeItemFromTop(cards) {
  cards.pop();
  return cards; 
}

//Task #6
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

//Task #7
export function removeItemAtBottom(cards) {
  cards.shift(cards);
  return cards; 
}

//Task #8
export function checkSizeOfStack(cards, stackSize) {
  if (cards.length === stackSize) {
    return true
  } 
  else 
  {
    return false
  }
}
