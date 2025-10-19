const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

const {key, name, age} = person;

console.log({key, name, age});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({key, name, age, rank = 'sin rango'}: Hero) => {
    return{
        keyName: key,
        user:{
            name: name,
            age: age,
        },
        rank: rank,
    };
};

const {rank, keyName} = useContext(person);

console.log({rank, keyName});

