def driver(data):
    first_name, middle_name, surname, dob, gender = data
    
    surname_part = (surname[:5].upper() + "99999")[:5]
    
    day, tve_str, year = dob.split('-')  
    decade_digit = year[-2]
    year_digit = year[-1]
    
    tve = {"Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", 
           "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"}[tve_str[:3].capitalize()]
    
    if gender.upper() == "F":
        tve = str(int(tve) + 50)
    
    initials = first_name[0].upper() + (middle_name[0].upper() if middle_name else "9")
    
    license_number = (
        f"{surname_part}{decade_digit}{tve}{day}{year_digit}{initials}9AA"
    )
    
    return license_number