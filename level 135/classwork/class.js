function decodeResistorColors(bands){
    const colors = {
        black : 0,
        brown : 1,
        red : 2,
        orange : 3,
        yellow : 4,
        green : 5,
        blue : 6,
        violet : 7,
        gray : 8,
        white : 9
    }
    bands = bands.toLowerCase().split(" ")
    let str = String(colors[bands[0]]) + String(colors[bands[1]])
    let num = Number(str) * (10** colors[bands[2]])
    let percent = 0
    if(bands.length === 3){
        percent = 20 
    }
    else if(bands.length === 4){
        if(bands[3] === "gold"){percent = 5}    
        else if(bands[3] === "silver"){percent = 10}
    }    
    if(num >= 1000 && num < 1000000){
        num = num/1000 + "k"
    }
    else if (num >= 1000000){
        num = num/1000000 + "M"
    }
    return String(num) + " ohms, " + percent + "%"
}
decodeResistorColors("red white brown");