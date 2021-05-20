const sampleArray = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
const result = []

funcOrderAnagram(result, sampleArray)

function funcOrderAnagram(result, sample) {
  const restSample = []
  const anagramWord = []
  
  for (let i = 0; i < sample.length; i++) {
    if (isAnagramWord(sample[0], sample[i])) {
      anagramWord.push(sample[i])
    } else {
      restSample.push(sample[i])
    }
  }
  result.push(anagramWord)
  if (restSample.length < 1) return result
  funcOrderAnagram(result, restSample)
}

function isAnagramWord(first, two) {
  if (first.length !== two.length) return false;
  for (let i = 0; i < first.length; i++) {
    if (!two.includes(first[i])) return false;
    two = two.replace(first[i], '')
  }
  return true;
}