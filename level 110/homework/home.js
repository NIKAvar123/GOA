//setInterval(function, milliseconds);
//setInterval(() => {
//  console.log("Hello every 2 seconds");
//}, 2000);



  let box = document.getElementById("box");
  let pos = 0;

  let animation = setInterval(() => {
    if (pos >= 300) {
      clearInterval(animation); // გაჩერება
    } else {
      pos++;
      box.style.left = pos + "px";
    }
  }, 10); // მოძრაობს ყოველ 10 მილიწამში








  const shape = document.getElementById("shape");

  function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  }

  setInterval(() => {
    shape.style.borderRadius = Math.floor(Math.random() * 100) + "%";
    shape.style.backgroundColor = getRandomColor();
  }, 5000); // ყოველ 5 წამში




                                                  
setInterval(() => console.log("Interval A"), 1000);
setInterval(() => console.log("Interval B"), 1000);



