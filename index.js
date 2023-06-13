// question: 
// You have an array like “ var x = [ 10, 20, 30] “ 
// Now sum all those items using for loop. The sum Result is 60.

// solution:
var x = [10, 20, 30];
var sum = 0;

for (var num of x) {
  sum += num;
}

console.log(`The sum is: ${sum}`);
