const sampleArray = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
const resultArray = []

funOrderAnagram(resultArray, sampleArray)

function funOrderAnagram(result, sample) {
  const resultArray = result;
  const restSample = []
  const anagramWord = []
  const sampleString = sample[0]
  
  for (let i = 0; i < sample.length; i++) {
    if (compareTwoWord(sampleString, sample[i])) {
      anagramWord.push(sample[i])
    } else {
      restSample.push(sample[i])
    }
  }
  resultArray.push(anagramWord)
  if (restSample.length < 1) return resultArray
  return funOrderAnagram(resultArray, restSample)
}

function compareTwoWord(first, two) {
  if (first.length !== two.length) return false;
  for (let i = 0; i < first.length; i++) {
    if (!two.includes(first[i])) return false;
  }
  return true;
}