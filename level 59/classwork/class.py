def cube_checker(volume, side):
    return side > 0 and volume == side ** 3
    cube_checker(27, 3)
    cube_checker(16, 3)
    cube_checker(0, 0)
    cube_checker(-27, 3)
