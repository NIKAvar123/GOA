//function name(div1){
//    div1.textContent="hello";}

//name(document.getElementById("div1"));



function name(id){
    document.getElementById(id).textContent.textContent="გამარჯობა";

}

name("div1");
  

function multiply(a,b,c){
    return a*b*c
}

let multiplication=multiply(12,67,98)

document.getElementById("p1").textContent="the result is:"+multiplication