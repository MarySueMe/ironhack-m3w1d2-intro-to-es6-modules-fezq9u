/*

TASK: 

- we’re trying to invoke printIronhackerDetails(),
which is defined in a different file.

- Fix that using ES6 modules.

- (Bonus): if you finish, check the file bonus.js


*/
import { printName, printAge}, printIronhackerDetails from './ironhacker.js';

console.log('printing the details of our ironhacker...');
printIronhackerDetails();
