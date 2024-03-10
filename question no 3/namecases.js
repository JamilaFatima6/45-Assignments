var person_name = "jamila";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
