function count_Vowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  const inputString = "Abhishek";
  const result = count_Vowels(inputString);
  console.log(result);