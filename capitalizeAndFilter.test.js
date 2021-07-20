import capitalizeAndFilter from "./capitalizeAndFilter";

describe('capitalizeAndFilter', () => {
  it('takes in an array of strings, capitalizes all the strings, and filters out any string that starts with F/f.', () => {
    const arr = ['bob', 'fred', 'alice'];
    const expected = ['BOB', 'ALICE'];
    const actual = capitalizeAndFilter(arr);  
        
    expect(actual).toEqual(expected);
  });
});