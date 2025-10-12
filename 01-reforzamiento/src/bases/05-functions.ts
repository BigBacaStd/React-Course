function greet (name: string){
    return `Hola ${name}`
}

const greet2 = (name: string) => {
    return `Hola ${name}`
}
        
const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

function getUser(){
    return {
        uid: 'ABC-123',
        username: 'Big Baca',
    };
}

const getUser2 = () => {
    return{
        uid: 'ABC-123',
        username: 'Big Baca',
    }

}

const user= getUser()
const user2 = getUser2()
console.log(user, user2);

