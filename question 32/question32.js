var current_users = ['John', 'Alice', 'Bob', 'Charlie', 'Emily'];
var new_users = ['alice', 'David', 'john', 'Frank', 'emily'];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    var user_lower = user.toLowerCase();
    if (current_users_lower.includes(user_lower)) {
        console.log("Sorry, the username '".concat(user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(user, "' is available."));
    }
}
