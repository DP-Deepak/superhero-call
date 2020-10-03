const { superHeroNames } = require("./constants")


const decodeNumber = (num) => {

  let decodeStrings = []



  num.split('').forEach(one => {
    // console.log('num:', one)
    switch (one) {
      case '1': decodeStrings.push('@.?')
        break;
      case '2': decodeStrings.push('abc')
        break;
      case '3': decodeStrings.push('def')
        break;
      case '4': decodeStrings.push('ghi')
        break;
      case '5': decodeStrings.push('jkl')
        break;
      case '6': decodeStrings.push('mno')
        break;
      case '7': decodeStrings.push('pqrs')
        break;
      case '8': decodeStrings.push('tuv')
        break;
      case '9': decodeStrings.push('wxyz')
        break;
      default: decodeStrings.push('#')
    };
  })

  return decodeStrings;

}
const getSuperHeroName = (allStringsArr) => {
  let found = false, heroName;
  superHeroNames.some((hero, i) => {
    if (hero.length === allStringsArr.length) {
      found = hero.split('').every((one, i) => {
        return (allStringsArr[i].includes(one)) ? true : false
      })
      return (found) ? heroName = hero : false
    }
    return found;
  })
  return heroName;
}

export  { getSuperHeroName, decodeNumber }
