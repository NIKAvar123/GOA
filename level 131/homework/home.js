
//2
// localStorage გამოიყენება ბრაუზერში მონაცემების შესანახად.
// მონაცემები რჩება შენახული იქამდე, სანამ მომხმარებელი ხელით არ წაშლის ან სკრიპტით არ წაიშლება.

//2
// setItem(key, value) – მონაცემის შენახვა
// getItem(key) – მონაცემის წაღება
// removeItem(key) – კონკრეტული მონაცემის წაშლა
// clear() – ყველა მონაცემის წაშლა
// key(index) – ინდექსის მიხედვით key-ის მიღება
// length – შენახული ელემენტების რაოდენობა


//3
//localStorage.setItem('key', 'value'); // ინახავს მონაცემს key-ს სახელით
//localStorage.getItem('key'); // იღებს მონაცემს მითითებული key-ით
//localStorage.removeItem('key'); // შლის კონკრეტულ key-ს და მის მნიშვნელობას
//localStorage.clear(); // შლის ყველა ჩანაწერს localStorage-დან
//localStorage.key(0); // აბრუნებს პირველი ელემენტის key-ს
//localStorage.length; // აბრუნებს შენახული ელემენტების რაოდენობას



//4)localStorage.setItem('username', 'giorgi');


//5
//const username = localStorage.getItem('username');
//console.log(username); // giorgi


//6
// Google Chrome-ში:
// Developer Tools → Application → Local Storage → [website name]
// ან შეგიძლიათ console-ში დაწეროთ: localStorage და ნახავთ ყველაფერს
