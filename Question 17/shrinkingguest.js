var Guest__List = ["sana", "sumbul", "tayyba"];
var not__Present = "sana";
var NewGuest = "lilly";
Guest__List[0] = NewGuest;
// for (let a:number=0; a<Guest_List.length; a++ ){
//     console.log ("respected "+ Guest_List[a]+ ',\n we are inviting you on dinner tommorow. \n')
// }
console.log("".concat(not__Present, " is not coming tommorow for dinner"));
Guest__List.unshift("saeeda");
Guest__List.splice(3, 0, "shazia");
Guest__List.push("swaiba");
// for (let a:number=0; a<Guest_List.length; a++ ){
//     console.log ("respected "+ Guest_List[a]+ ',\n we are inviting you on dinner tommorow, we found a big table so we have  decided to invite  more guest\n')
// }
console.log('\n Unfortunatly  we can not arrange  big table ,so we can allow  only two people for  dinner');
while (Guest__List.length) {
    var removeguest = Guest__List.pop();
    console.log("sorry ".concat(removeguest, "you are  not invited for dinner."));
}
for (var a = 0; a < Guest__List.length; a++) {
    console.log('respected' + Guest__List[a] + ',\n yes you are still invited \n');
}
Guest__List.splice(0, 2);
console.log(Guest__List);
