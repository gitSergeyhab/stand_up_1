
export const arraysSort = (first: number[], second: number[]) => {
  let fId = 0;
  let sId = 0;
  const result = [];


  for (; fId < first.length; ) {
    // console.log(first[fId] < second[sId], first[fId], second[sId]);

    if (!first[fId]) {
      result.push(...second.slice(sId));

      return result;
    }
    if (!second[sId]) {
      result.push(...first.slice(fId));

      return result;
    }
    if (first[fId] < second[sId]) {
      result.push(first[fId]);
      fId++;
    } else {
      result.push(second[sId]);
      sId++;
    }
  }
  if (sId < second.length) {
    result.push(...second.slice(sId));

  } else {
    // console.log(sId, second[sId]);

  }
  return result;
};

// const a = [1,4,5,8,9];
// const b = [3,4,6,7,8,11,22];
// 1, 3, 4, 4, 5, 6, 7, 8, 8, 9

//1,2,3,5,8

export const getMinMax = (array: number[]) => {
  if (!array.length) {
    return null;
  }
  let min = array[0];
  let max = array[0];

  for (const i of array) {
    if (i < min) {
      min = i;
    }

    if (i > max) {
      max = i;
    }
  }

  return {min, max};
};


export const sort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [ arr[j], arr[j + 1]] = [ arr[j + 1], arr[j]];
      }
    }
  }
  return[arr];
};

export const checkSortedArray = (array: number[]) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) {
      return false;
    }
  }

  return true;
};


