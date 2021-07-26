//takes in an array of strings, capitalizes all the strings, and filters out any string that starts with F/f.

const capitalizeAndFilter = (stringArray) => {
  const upperCaseArray = stringArray.map(string => string.toUpperCase());

  const filteredArray = upperCaseArray.filter(string => string[0] !== 'F');

  return filteredArray;
};

  




export default capitalizeAndFilter;
