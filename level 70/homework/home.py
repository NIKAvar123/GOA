def create_2d_array(rows, cols):
    array = [7,23,5,2,5,2,1,45,21,4,4]
    counter = 1
    for i in range(rows):
        row = []
        for j in range(cols):
            row.append(counter)
            counter += 1
        array.append(row)
    return array
