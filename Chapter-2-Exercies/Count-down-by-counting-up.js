// PROBLEM: COUNT DOWN BY COUNTING UP
// Write a line of code that goes in the designated position in the loop in the listing below. The program
// displays the numbers 5 through 1, in that order, with each number on a separate line.
// for (int row = 1; row <= 5; row++) {
//  cout << expression << "\n";
// }

process.stdout.write('\n\n PROBLEM: COUNT DOWN BY COUNTING UP \n\n');

for(let row = 1; row <= 5; row++) {
    process.stdout.write(`${6 - row} \n`);    
}