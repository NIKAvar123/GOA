document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer captured");
}, true);

document.getElementById("inner").addEventListener("click", () => {
  console.log("Inner clicked");
});





function testVar() {
  var x = 10;
  if (true) {
    var x = 20; // იგივე ცვლადია
    console.log("შიდა:", x); // 20
  }
  console.log("გარე:", x); // 20
}

testVar();



function testLet() {
  let x = 10;
  if (true) {
    let x = 20; // ახალი ცვლადია ამ ბლოკში
    console.log("შიდა:", x); // 20
  }
  console.log("გარე:", x); // 10
}

testLet();


function testConst() {
  const x = 10;
//const არ შეიძლება შეიცვალოს
  console.log(x); // 10
}

testConst();



