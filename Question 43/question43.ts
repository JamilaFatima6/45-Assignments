function make_great2(magician: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let a = 0; a < magician.length; a++) {
        greatMagicians.push(magician[a] + ' the Great');
    }
    return greatMagicians;
}

function show___magicians(magicians: string[]): void {
    console.log(magicians.join(', '));
}

const magicians3: string[] = ['sana', 'sumbul', 'lilly'];
const greatMagicians2: string[] = make_great2(magicians3);

show___magicians(magicians3);
show___magicians(greatMagicians2);