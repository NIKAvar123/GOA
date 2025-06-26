function encode(string) {
  let output = "";
  for(let i = 0; i < string.length; i++) {
    switch(string[i]) {
      case 'a': output+= "1"
        break;
      case 'e': output+= "2"
        break;
      case 'i': output+= "3"
        break;
      case 'o': output+= "4"
        break;
      case 'u': output+= "5"
        break;
      default: output += string[i];
    }
  }
  return output;
}

function decode(string) {
  let output = "";
  for(let i = 0; i < string.length; i++) {
    switch(string[i]) {
      case '1': output+= "a"
        break;
      case '2': output+= "e"
        break;
      case '3': output+= "i"
        break;
      case '4': output+= "o"
        break;
      case '5': output+= "u"
        break;
      default: output += string[i];
    }
  }
  return output;
}