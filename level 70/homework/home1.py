def print_matrix_details(matrix):
    rows = len(matrix)
    cols = len(matrix[0]) if rows > 0 else 0

    print("Rows:")
    for row in matrix:
        print(row)

    print("\nColumns:")
    for col_index in range(cols):
        column = [matrix[row_index][col_index] for row_index in range(rows)]
        print(column)

    print("\nDiagonals:")

    main_diagonal = [matrix[i][i] for i in range(min(rows, cols))]
    print("Main diagonal:", main_diagonal)


    secondary_diagonal = [matrix[i][cols - 1 - i] for i in range(min(rows, cols))]
    print("Secondary diagonal:", secondary_diagonal)
