function bubbleSort(arr) {
    const startTime = performance.now();
    let n = arr.length;
    let iterations = 0;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        iterations++;
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    const endTime = performance.now();
    return { sortedData: arr, time: endTime - startTime, iterations };
  }
  
  function mergeSort(arr) {
    const startTime = performance.now();
    let iterations = 0;
  
    function merge(left, right) {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;
  
      while (leftIndex < left.length && rightIndex < right.length) {
        iterations++;
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
  
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
  
    function mergeSortRecursive(array) {
      if (array.length <= 1) {
        return array;
      }
  
      const middleIndex = Math.floor(array.length / 2);
      const left = array.slice(0, middleIndex);
      const right = array.slice(middleIndex);
  
      return merge(mergeSortRecursive(left), mergeSortRecursive(right));
    }
  
    const sortedData = mergeSortRecursive(arr);
    const endTime = performance.now();
    return { sortedData, time: endTime - startTime, iterations };
  }
  
  function radixSort(arr) {
    const startTime = performance.now();
    let iterations = 0;
  
    function getMax(array) {
      let max = array[0];
      for (let i = 1; i < array.length; i++) {
        iterations++;
        if (array[i] > max) {
          max = array[i];
        }
      }
      return max;
    }
  
    function countingSort(array, exp) {
      let output = new Array(array.length);
      let count = new Array(10).fill(0);
  
      for (let i = 0; i < array.length; i++) {
        count[Math.floor(array[i] / exp) % 10]++;
      }
  
      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
      }
  
      for (let i = array.length - 1; i >= 0; i--) {
        output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
        count[Math.floor(array[i] / exp) % 10]--;
      }
  
      for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
      }
    }
  
    function radixSortAlgorithm(array) {
      let max = getMax(array);
      for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(array, exp);
      }
      return array;
    }
  
    const sortedData = radixSortAlgorithm(arr);
    const endTime = performance.now();
    return { sortedData, time: endTime - startTime, iterations };
  }
  
  export { bubbleSort, mergeSort, radixSort };