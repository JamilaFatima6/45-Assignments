var Guest_List = ["sana", "sumbul", "tayyba"];
var not_Present = "sana";
var new_Guest = "lilly";
Guest_List[0] = new_Guest;
// for (let a:number=0; a<Guest_List.length; a++ ){
//     console.log ("respected "+ Guest_List[a]+ ',\n we are inviting you on dinner tommorow. \n')
// }
console.log("".concat(not_Present, " is not coming tommorow for dinner"));
Guest_List.unshift("saeeda");
Guest_List.splice(3, 0, "shazia");
Guest_List.push("swaiba");
for (var a = 0; a < Guest_List.length; a++) {
    console.log("respected " + Guest_List[a] + ',\n we are inviting you on dinner tommorow, we found a big table so we have  decided to invite  more guest\n');
}
