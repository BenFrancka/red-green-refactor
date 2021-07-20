//function returns new array with all items from original array and a new item pushed to the end
const copyAndPush = (someArray, newItem) => {
    const newArray=  someArray;
    const newArrayCopy= [...newArray];

    newArrayCopy.push(newItem);
    return newArrayCopy;
}

export default copyAndPush;