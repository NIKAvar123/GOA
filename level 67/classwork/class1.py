def cat_and_mouse(s):

    distance = s.index('m') - s.index('C') - 1

    return "Caught!" if distance <= 3 else "Escaped!"