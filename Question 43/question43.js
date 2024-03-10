function make_great2(magician) {
    var greatMagicians = [];
    for (var a = 0; a < magician.length; a++) {
        greatMagicians.push(magician[a] + ' the Great');
    }
    return greatMagicians;
}
function show___magicians(magicians) {
    console.log(magicians.join(', '));
}
var magicians3 = ['sana', 'sumbul', 'lilly'];
var greatMagicians2 = make_great2(magicians3);
show___magicians(magicians3);
show___magicians(greatMagicians2);
