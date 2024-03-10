let current_users: string[] = ['John', 'Alice', 'Bob', 'Charlie', 'Emily'];


let new_users: string[] = ['alice', 'David', 'john', 'Frank', 'emily'];

let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for (let user of new_users) {
    let user_lower: string = user.toLowerCase();
    if (current_users_lower.includes(user_lower)) {
        console.log(`Sorry, the username '${user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${user}' is available.`);
    }
}