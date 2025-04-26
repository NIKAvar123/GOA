function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
  }




  function openOrSenior(data){
    var arr = data.map(function(item){
      if(item[0] >= 55 && item[1] > 7){
        return "Senior";
      } else {
        return "Open";
      }
    });
    return arr;
  }