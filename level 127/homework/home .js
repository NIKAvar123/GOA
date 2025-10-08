const promise1 = new Promise ((resolve ,reject ) => {
    setTimeout (resolve ,3000 ,"ip 17")
});

const promise2 = new Promise ((resolve ,reject ) => {
    setTimeout (resolve ,1000 ,"ip 17 air")
});

const promise3 = new Promise ((resolve ,reject ) => {
    setTimeout (resolve ,2000 ,"ip 17 pro max")
});

Promise.all([promise1,promise2, promise3]).then((massage)=>{console.log(massage)})
