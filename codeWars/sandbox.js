function vowelIndices(word){
    const regEx = /[aeiou]/;
    const sWord = word.split('');
    const locations = [];
    for (let i = 0; i < sWord.length; i++){
      if(regEx.test(sWord[i])) locations.push(i)
    } return locations
  }