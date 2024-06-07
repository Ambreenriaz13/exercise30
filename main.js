// Creating an Array
var userNames = ["Ziyam", "Asif", "Adnan", "Admin", "Afnan"];
// Using ForEach  Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for logging in again"));
    }
});
