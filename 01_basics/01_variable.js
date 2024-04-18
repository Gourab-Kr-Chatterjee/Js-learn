// how variables can be declared
const accountId = 12342
let accountEmail = "gourav@google.in"
var accountPassword = "12345678"
accountCity = "Jamshedpur"
let accountState;  // undefined variable

// accountId = 2 // not allowed because variable declared through constant keyword, can't be changed.

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "gc@gc.com"
accountPassword = "222"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// console.table can print multiple variable in form of table.