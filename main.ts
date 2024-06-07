// Creating an Array
let userNames =["Ziyam", "Asif","Adnan","Admin","Afnan"];

// Using ForEach  Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thankyou for logging in again`)
    }
}
)