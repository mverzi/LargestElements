/**
 * This function returns the n largest elements from an array 
 * @param {number} n 
 * @param {number array} arr 
 * @returns The n largest elements in arr
 */
function largest(n,arr){
    return n === 0 ? [] : arr.sort((a,b) => a-b).slice(-n)
  }