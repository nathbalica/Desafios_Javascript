function palindrome(word) {
    var reverseWord = word.split("").reverse().join("");
    if (reverseWord === word) {
      return "sim";
    } else {
      return "não";
    }
  }

  console.log(palindrome("natanaele"))