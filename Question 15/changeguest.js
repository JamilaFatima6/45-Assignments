var guest_List = ["sana", "sumbul", "tayyba"];
// for (let a:number=0; a<guest_List.length; a++ ){
//     console.log ("respected "+ guest_List[a]+ ',\n we are inviting you on dinner tommorow. \n')
var notPresent = "sana";
var newGuest = "lilly";
guest_List[0] = newGuest;
for (var a = 0; a < guest_List.length; a++) {
    console.log("respected " + guest_List[a] + ',\n we are inviting you on dinner tommorow. \n');
}
console.log("".concat(notPresent, " is not coming tommorow for dinner"));
