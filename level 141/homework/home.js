// function Header() {
//   return <header><h1></h1></header>;
// }

// function Footer() {
//   return <footer><p></p></footer>;
// }

// export { Header, Footer };


import figlet from "figlet";

figlet.text("Hello React!", { font: "Standard" }, (err, data) => {
  if (err) {
    console.log("შეცდომა:", err);
    return;
  }
  console.log(data);
});
