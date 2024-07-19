let array = [];

function insertArray(data) {
  const startTime = performance.now();
  array = data.slice();
  const endTime = performance.now();
  return { data: array, time: endTime - startTime };
}

function searchArray(item) {
  const startTime = performance.now();
  const index = array.indexOf(item);
  const endTime = performance.now();
  return { index, time: endTime - startTime };
}

function getArrayData() {
  return array;
}

export { insertArray, searchArray, getArrayData };