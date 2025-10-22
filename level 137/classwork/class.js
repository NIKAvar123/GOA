//codewars!!!
function f(x,y,z){
  return x * (y + 1) * (z + 1) +
         y * (z + 1) * (x + 1) +
         z * (x + 1) * (y + 1);
}



function head(array) {
  return array[0];
}
function tail(array) {
  return array.slice(1);
}
function init(array) {
  return array.slice(0, -1);
}
function last(array) {
  return array[array.length-1];
}