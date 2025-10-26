const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Give my money back!
        reject('My foo is in jail!');
    }, 5000);
})

myPromise.then((myMoney) => {
    console.log(`Got my Money Back ${myMoney}`);
})
.catch((reason) => {
    console.warn(reason);
})
.finally(() =>{
    console.log('Gotta get that money back!')
})