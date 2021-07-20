//function returns new array with all items from original array and a new item pushed to the end
const copyAndPush = (someArray, newItem) => {
    const newArray=  someArray;
    newArray.push(newItem);
    return newArray;
}

export default copyAndPush;