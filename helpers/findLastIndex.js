export function findLastIndex(array, searchKey, searchValue) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i][searchKey].substring(0, 10) === searchValue) {
      return i;
    }
  }
}
