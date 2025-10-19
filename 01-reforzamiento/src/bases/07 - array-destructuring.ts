const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, ,Trunks] = characterNames;

console.log({Trunks});

const returnsArrayFN = () => {
    return['ABC', 123] as const;
};

const [letters, numbers] = returnsArrayFN();

console.log(letters + numbers);