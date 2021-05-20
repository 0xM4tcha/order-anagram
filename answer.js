const sampleArray = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
const result = []

funcOrderAnagram(result, sampleArray)

function funcOrderAnagram(result, sample) {
  const restSample = []
  const anagramWord = []
  
  for (let i = 0; i < sample.length; i++) {
    isAnagramWord(sample[0], sample[i]) ? anagramWord.push(sample[i]) : restSample.push(sample[i])
  }
  result.push(anagramWord)
  if (restSample.length < 1) return result
  funcOrderAnagram(result, restSample)
}

function isAnagramWord(firstWord, lastWord) {
  if (firstWord.length !== lastWord.length) return false;
  for (let i = 0; i < firstWord.length; i++) {
    if (!lastWord.includes(firstWord[i])) return false;
    lastWord = lastWord.replace(firstWord[i], '')
  }
  return true;
}