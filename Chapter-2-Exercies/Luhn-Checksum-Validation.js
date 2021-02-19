/*
*   Problem: Luhn Checksum Validation
*
*   The Luhn formula is a widely used system for validating identification
*   numbers. Using the original number, double the value of every other digit.
*   Then add the values of the individual digits together (if a doubled value
*   now has two digits, add the digits individually). The Identification number
*   is valid if the sum is divisible by 10.
*
*   Write a program that takes an identification number of arbitrary length and
*   determines wheter the number is valid under the Luhn formula. The program
*   must process each character before reading the next one.
*/

process.stdout.write('\n\n Problem: Luhn Checksum Validation \n\n');

function checkNum(digit) {
    const digitArray = digit.toString().split(''); 
    
    if(digitArray.length !== 7) {
        throw new Error('The number is wrong!')
    }

    return function process(sum = 0, index = 1) {

        let digit = Number(digitArray.pop());
       
        if(!digit) {
            const test = sum%10 === 0;

            return test; 
        } else {
            digit = index%2 === 0 ? digit * 2 : digit;

            if(digit/10 >= 1) {
                const digitTempArray = digit.toString().split('');
                sum += Number(digitTempArray[0]) + Number(digitTempArray[1]);
                
                return process(sum, index + 1);
            }
            
            sum += digit;
            
            return process(sum, index + 1);
        }
    }();
}

console.log(checkNum(1762483)) // print true;
console.log(checkNum(1762481)) // print false;
// console.log(checkNum(1781)) // print error;
// console.log(checkNum(17624811111)) // print error;