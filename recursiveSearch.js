function recursiveBinSearch(arr, target){

  /* While not always necessary, it's good to check that
   * the user has given you arguments of the correct data
   * type. Checks like these can show that you consider
   * edge cases and can score you points in an interview.
   */
  if(!Array.isArray(arr)){
    console.log('error, your first argument is not an array. Instead, it is: ', typeof arr);
    return 'ERROR';
  }
  if(typeof target !== 'number'){
    console.log('error, your second argument is not a number. Instead, it is:', typeof target);
    return 'ERROR';
  }



  var subArray;
  var midIndex = Math.floor(arr.length / 2);
  /*  the "base case" when we can return a value */
  if(arr[midIndex] === target){
    return midIndex;
  }
  else if(arr.length === 1 || arr.length === 0){
    return -1;
  }
  /* The elses will deal with the cases in which the target
   * does not equal the item in the middle of the Array.
   * First: when the item at the middle is greater than the
   * target value.
   */
  else if (arr[midIndex] > target) {
    // slice the array into the first half of the array
    subArray = arr.slice(0, midIndex)
    // and return the result of a binary search that part of it.
    return recursiveBinSearch(subArray, target);
  }
  /* Second: When the item at the middle location is less than
   * the target value
   */
  else{
    // slice the array to select the second half of the array.
    subArray = arr.slice(midIndex + 1, arr.length);
    var resultFromSubArray = recursiveBinSearch(subArray,target);
    // we want a result of -1 to "dominate" any other result so
    // that -1 is returned if the target wasn't ever found
    if(resultFromSubArray === -1){
      return -1;
    }else{
      // to return the proper value, you need to add the length of the
      // "excluded" first half of the array to the result of the binary
      // search of the second half of the array.
      return (midIndex + 1) + resultFromSubArray;
    };
  }
}

console.log(recursiveBinSearch([0,2,4,6,8,10,12,14,16,18,20], 18));
