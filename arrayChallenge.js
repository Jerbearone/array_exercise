// findCommonElements function implementation
function findCommonElements(arr1, arr2) {
  // Write your code here
  const dupes = [];
  arr1.forEach(item => {
    if (arr2.includes(item)){
      if (!dupes.includes(item)) {
        dupes.push(item);
        //console.log("dupe" + item);

      }
      
    }
  })
  return dupes
}
findCommonElements([1,2,3],[3,4,5]);

// Uncomment the following lines to test your implementation
 const arr1 = [1, 2, 3, 4, 5];
 const arr2 = [4, 5, 6, 7, 8];
 console.log(findCommonElements(arr1, arr2)); // Expected output: [4, 5]

// Unit test
// Uncomment the following lines to run the unit test
 const testCases = [
   [[1, 2, 3], [4, 5, 6], []],
   [[1, 2, 3, 4], [4, 5, 6], [4]],
   [[1, 2, 3, 4], [5, 6], []],
   [[1, 2, 3, 4, 5], [4, 5, 6], [4, 5]],
   [[1, 1, 2, 2, 3], [2, 3, 4, 5], [2, 3]],
 ];

 for (const [arr1, arr2, expected] of testCases) {
   const result = findCommonElements(arr1, arr2, expected);
   console.log(result); // Expected output: the corresponding 'expected' value from the testCases array
 }

 module.exports = {findCommonElements};
