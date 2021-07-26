//takes in an array of strings, capitalizes all the strings, and filters out any string that starts with F/f.

const capitalizeAndFilter = (stringArray) => {
  const newArray = [];

  for(const string of stringArray) {
    if(string[0] !== 'f' && string[0] !== 'F') {
      newArray.push(string.toUpperCase());
    }
  }
  return newArray;
};

  

//const upperCaseArray = stringArray.map(string => string.toUpperCase());

//const filteredArray = upperCaseArray.filter(string => string[0] !== 'F');

//return filteredArray;


export default capitalizeAndFilter;
