let guest_List:string[] =["sana","sumbul","tayyba"]
// for (let a:number=0; a<guest_List.length; a++ ){
//     console.log ("respected "+ guest_List[a]+ ',\n we are inviting you on dinner tommorow. \n')


let  notPresent:string ="sana"
let newGuest:string= "lilly"
guest_List[0]=newGuest;

for (let a:number=0; a<guest_List.length; a++ ){
    console.log ("respected "+ guest_List[a]+ ',\n we are inviting you on dinner tommorow. \n')
}
console.log (`${notPresent} is not coming tommorow for dinner`)