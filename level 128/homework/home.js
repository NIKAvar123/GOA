

//1
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('დაფიქსირდა შეცდომა:', err));



//2
fetch('https://jsonplaceholder.typicode.com/users/5')
  .then(res => res.json())
  .then(user => console.log(user.email));


//3
fetch('https://jsonplaceholder.typicode.com/users/5')
  .then(res => res.json())
  .then(user => console.log(user.email));



//4

