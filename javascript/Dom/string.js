/***************************************** string  26/7/24 ************************************************************/

var str7 = "student count : ";
var count = 50;

var str8 = `${ste7} is greater then ${count}`;

console.log(str8);

/////////////////////// string Function

var str9 = 'Wellcome_to_Tutorial';

console.log(str9.length); //20

console.log(str9.slice(3, 7)); // 'come' is a new string returened

console.log(str9.concat("again")); // 'Welcone_to_Tutorial_again'

console.log(str9.lastIndexOf('e')); //7

console.log(str9.split('_')); // ["Wellcome", "to", "Tutioral", "0"]

console.log(str9.substr(4, 8)); // `come_to`

console.log(str9.substring(4, 8)); // "come"


var str10 = "zome string";
str10.replace('s', 'z'); //"zoom string"
str10.replaceAll('s', 'z'); //"zoom string"


/******************************  practice Example ***********************************/
 
var str9 ='Wellcome_to_Tutorial';

console.log(str9.slice(15,-1));  //"oria"
console.log(str9.substr(15,-1)); //""
console.log(str9.substring(15,-1)); //"Wellcome_to_Tut"
