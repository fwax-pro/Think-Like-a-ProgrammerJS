/*
*   Problem: A Sideways Triangle
*
*   Write a program that uses only two output statemetns, cout << "#" and
*   cout << "\n" to produce a pattern of hash symbols shaped like a sideways
*   triangle:
*
*   #
*   ##
*   ###
*   ####
*   ###
*   ##
*   #
*/

process.stdout.write('\n\n Problem: A Sideways Triangle \n\n');

for(let row = 1; row <= 7; row++) {
    for(let line = 1; line <= 4 - Math.abs(4 - row); line++) {
        process.stdout.write('#');
    }
    process.stdout.write('\n');    
}