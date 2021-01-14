function quickSort(arr) {
  function sort(arr, left, right){
    if(left >= right) return;
    const pivot = arr[right];
    let storeIndex = left;
    for(let i = left; i < right; i++) {
     if(arr[i] < pivot) {
        [arr[i], arr[storeIndex]] =[arr[storeIndex], arr[i]]
        storeIndex++;
     }
    }
    [arr[right], arr[storeIndex]] =[arr[storeIndex], arr[right]]
    sort(arr, left, storeIndex-1);
    sort(arr, storeIndex+1, right);
  }
  sort(arr, 0, arr.length - 1);
  return arr;
}
// first pass 5min
