
function make_Great(magician: string[]): void {
    for (let a = 0; a < magician.length; a++) {
        magician[a] = magician[a] + ' the Great';
    }
}

function show_magicians(magician: string[]): void {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}

const magician2: string[] = ["sana", "tayyaba", "sumbul"];
make_Great(magician2);
show_magicians(magician2);