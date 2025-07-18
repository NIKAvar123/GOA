def no_space(s):
    return s.replace(' ', '')

#____________________________________________

def abbrevName(name):
    namelist = name.split(' ')
    initials = []
    for item in namelist:
        item = item.capitalize()
        firstletter = item[0]
        initials.append(firstletter)
        firstletter = ''
    return '.'.join(initials)