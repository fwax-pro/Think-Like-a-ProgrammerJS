/*
*   Problem: Half of a Square
*
*   Write a program that uses only two output statemetns, cout << "#" and
*   cout << "\n" to produce a pattern of hash symbols shaped like half of a
*   perfect 5 x 5 square (or a right triangle):
*
*   #####
*   ####
*   ###
*   ##
*   #
*/

process.stdout.write('\n\n Problem: Half of a Square \n\n');

for(let y = 0; y < 5; y++) {
    for(let x = 0; x < 5 - y; x++) {
        process.stdout.write('#');
    }
    process.stdout.write('\n');
}