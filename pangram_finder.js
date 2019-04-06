const PangramFinder = function (phrase) {
  this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  this.phrase = phrase.toLowerCase().split('')
}

PangramFinder.prototype.isPangram = function () {
//clean this.phrase array to remove all whitespace and puncs - create new array
  let cleanedPhrase = this.cleanPhrase()
//filter through cleanedPhrase and return new array without duplicates
  let singleValues = cleanedPhrase.filter( function (item, index, self) {
    return self.indexOf(item) === index;
  });
//check if the new array, sorted and joined is the same as the alphabet
  return singleValues.sort().join('') === this.alphabet
}

PangramFinder.prototype.cleanPhrase = function () {
  let cleanedPhrase = []
  for ( let item of this.phrase){
    if (item.match(/[a-z]/i)){
      cleanedPhrase.push(item);
    }}
    return cleanedPhrase
}

module.exports = PangramFinder;
