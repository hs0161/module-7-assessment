//Problem 1: Sum Zero
function sumFinder(arr, num){
    let addToZero = {}
    let diff

    for (let i = 0; i < arr.length; i++){
        diff = num - arr[i]

        if (addToZero[diff]){
            return true
        } else {
            addToZero[arr[i]] = true
        }
    }
    return false
}

let addToZero = sumFinder([1, 2, 3, -2], 0)
// -> True

//Problem 2: Unique Characters
function hasUniqueChars(str){
    for (i = 0; i < str.length-1; i++  ){
        for(x = i + 1; x < str.length; x++){
            if (str[i] === str[x]) return false
        }
    }
    return true;
}
console.log(hasUniqueChars('moonday'))
// -> False

//Problem 3: Pangram Sentence
function isPangram(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
 }

console.log(isPangram("I like cats, but not mice"))
// -> false
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// -> true


//Problem 4: Longest Word
function longestWord(str) {
    let words = str.split(' ');
    let longest = ''; 
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) { 
        longest = words[i];
      }
    }
    return longest.length;
  }
  console.log(longestWord("hi hello"));
  // -> 5
