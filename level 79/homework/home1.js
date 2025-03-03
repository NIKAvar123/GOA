function main (width, height){
    let column =[ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
    for(let i = 0;i< width;i++){
        let row =[]
        for (let k =0;k< height;k++){
            row.push(k)
        }
        column.push(row)
    }
    return column
}

console.log(main(3, 3))