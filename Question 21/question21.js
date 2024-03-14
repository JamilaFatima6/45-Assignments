var countries = [
    { name: "United States", capital: "Washington, D.C." },
    { name: "United Kingdom", capital: "London" },
    { name: "France", capital: "Paris" },
    { name: "Germany", capital: "Berlin" },
    { name: "Italy", capital: "Rome" }
];
console.log("List of Countries and Capitals:");
countries.forEach(function (country) {
    console.log("".concat(country.name, " - Capital: ").concat(country.capital));
});
