const accountId = 14453
let accountEmail = "anandashu.nic@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId =2
accountEmail = "ashutoshanand45@gmail.com"
accountPassword = "212121"
accountCity = "Hyedrabad"

console.log(accountEmail);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail,accountPassword, accountCity  ])