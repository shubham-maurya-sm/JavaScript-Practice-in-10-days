const accountNo=987654321;
console.log(accountNo);

// Type 1
let accountEmail='shubham@email.com';

// Type 2
const accountPassword='12345678';

// accountPassword='987654321'   // (Not allowed to change constant value) accountPassword='987654321'   TypeError: Assignment to constant variable.



// Type 3
var accountCity='Mumbai';

// Type 4

accountState='Uttar Pradesh';   // not preferrable but can use it 

//------------------------------------------------------

//  accountNo=1234567890      // not allowed due to constant variable


accountEmail='skm@sm.com'

accountCity='Prayagraj'

// Type 1 output
console.log(accountNo);

// Type 2 output
console.table([accountNo,accountEmail,accountPassword,accountCity, accountState]);

console.log(accountState);



/*
Output 1:
PS D:\JavaScript Practice in 10 days\Basics> node .\01_Variables.js    
987654321
┌─────────┬─────────────────────┐
│ (index) │ Values              │
├─────────┼─────────────────────┤
│ 0       │ 987654321           │
│ 1       │ 'shubham@email.com' │
│ 2       │ '12345678'          │
│ 3       │ 'Mumbai'            │
└─────────┴─────────────────────┘


Output 2:
PS D:\JavaScript Practice in 10 days\Basics> node .\01_Variables.js    
987654321
987654321
┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 987654321       │
│ 1       │ 'skm@sm.com'    │
│ 2       │ '12345678'      │
│ 3       │ 'Prayagraj'     │
│ 4       │ 'Uttar Pradesh' │
└─────────┴─────────────────┘
Uttar Pradesh
*/