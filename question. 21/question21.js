// Array of country objects
var countries = [
    { name: "United States", capital: "Washington, D.C." },
    { name: "United Kingdom", capital: "London" },
    { name: "France", capital: "Paris" },
    { name: "Germany", capital: "Berlin" },
    { name: "Italy", capital: "Rome" }
];
// Print the list of countries and their capitals
console.log("List of Countries and Capitals:");
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log("".concat(country.name, " - Capital: ").concat(country.capital));
}
