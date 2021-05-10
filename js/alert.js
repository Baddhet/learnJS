function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');
  let acc = 0;
  const array1 = s1.split('');
  const array2 = s2.split('');
  console.log(array1)
  if (array1.length > 0) {
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          acc++;
          delete array2[j];
        }
      }
    }
  } else {
    return 0;
  }
  console.log(acc);
  return acc;
}

let str1 ='';
let str2 ='das';

getCommonCharacterCount(str1, str2);