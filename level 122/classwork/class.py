#1
def no_space(s):
    return s.replace(' ', '')


#2
def abbrevName(name):
    namelist = name.split(' ')
    initials = []
    for item in namelist:
        item = item.capitalize()
        firstletter = item[0]
        initials.append(firstletter)
        firstletter = ''
    return '.'.join(initials)


#3
def printer_error(s):
    good_colors = "abcdefghijklm"
    counter = 0
    for i in s:
        if i not in good_colors:
            counter += 1
    return str(counter) + "/" + str(len(s))

#4
def find_even_index(lst):
    left_sum = 0
    right_sum = sum(lst)
    for i, a in enumerate(lst):
        right_sum -= a
        if left_sum == right_sum:
            return i
        left_sum += a
    return -1

#5
def polydivisible(x):
    li = list(str(x))
    for i, digit in enumerate(li):
        if int("".join(li[:i+1])) % (i + 1) != 0:
            return False
    return True