function make_Great(magician) {
    for (var a = 0; a < magician.length; a++) {
        magician[a] = magician[a] + ' the Great';
    }
}
function show_magicians(magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
var magician2 = ["sana", "tayyaba", "sumbul"];
make_Great(magician2);
show_magicians(magician2);
