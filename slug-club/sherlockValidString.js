

function isValid(s){
    // Complete this function
  const count = {};
  let smallestCount = null;
  let foundDiff = false;
  let oneCount = 0;
  
  // iterate through s to populate count object and smallestCount 
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    count[char] = count[char] + 1 || 1;
  }
  
  for (let char in count) {
    if (count[char] < smallestCount || !smallestCount) {
      smallestCount = count[char];
    }

    if (count[char] === 1) { oneCount++; }
  }
  
  if (oneCount === 1 && smallestCount === 1) {
    return 'YES';
  }
  // iterate through count
  for (let char in count) {
    // compare each value to smallestCount
    const value = count[char];
    // if value is greater and flag is false
    if (value > smallestCount && foundDiff) {
      return 'NO';
    }
    // if value is greater and flag is true
    if (value > smallestCount) {
      foundDiff = true;
    }
  }
  return 'YES';
}

const test = isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd');


console.log('expect YES', test);