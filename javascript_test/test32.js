//ques1-------//
function insertionSort(arr){
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            
        }
    }

}
let arr = [12,25,31,8,17,32];
console.log(insertionSort(arr))


// ques2-----
function reverseVowels(s) {
  let vowel = "aeiou";
  let newstrArr = s.split("");
  console.log(newstrArr);
  let i = 0,
    j = s.length - 1;
  while (i <= j) {
    if (vowel.includes(s.charAt(i)) && vowel.includes(s.charAt(j))) {
      [newstrArr[i], newstrArr[j]] = [s[j], s[i]];
      i++;
      j--;
    } else if (!(vowel.includes(s.charAt(i)) && vowel.includes(s.charAt(j)))) {
      i++;
      j--;
    } else if (vowel.includes(s.charAt(i)) && !vowel.includes(s.charAt(j))) {
      j--;
    } else if (!vowel.includes(s.charAt(i)) && vowel.includes(s.charAt(j))) i++;
  }
  return newstrArr.join("");
}
let s = "leetcode";
console.log(reverseVowels(s));
//T.C:O(n/2)
// S.C:O(n)