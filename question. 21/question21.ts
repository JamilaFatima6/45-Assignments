interface Country {
    name: string;
    capital: string;
}



let countries: Country[] = [
    { name: "United States", capital: "Washington, D.C." },
    { name: "United Kingdom", capital: "London" },
    { name: "France", capital: "Paris" },
    { name: "Germany", capital: "Berlin" },
    { name: "Italy", capital: "Rome" }
];


console.log("List of Countries and Capitals:");
for (let country of countries) {
    console.log(`${country.name} - Capital: ${country.capital}`);
}