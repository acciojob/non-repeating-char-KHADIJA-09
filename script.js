function firstNonRepeatedChar(str) {
	 const charCount = {};
   for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Loop through the string again to find the first character that appears only once
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return str[i];
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
//const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
