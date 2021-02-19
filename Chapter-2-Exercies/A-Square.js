// PROBLEM: A SQUARE (HALF OF A SQUARE REDUCTION)
// Write a program that uses only two output statements, cout << "#" and cout << "\n", to produce a
// pattern of hash symbols shaped like a perfect 5x5 square:
// #####
// #####
// #####
// #####
// #####

process.stdout.write('\n\n PROBLEM: A SQUARE (HALF OF A SQUARE REDUCTION) \n\n');

for(let y = 0; y < 5; y++) {
    for(let x = 5; x > 0; x--) {
        process.stdout.write('#');
    }
    process.stdout.write('\n');
}