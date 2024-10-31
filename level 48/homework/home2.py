def print_pairs(n):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if j > i:
                print(f"({i},{j})")

print_pairs(3)
