def get_issuer( _n ):
    n = str(_n)
    if (n[:2] == '34' or n[:2] == '37') and len(n) == 15:
        return 'AMEX'
    elif n[:4] == '6011' and len(n) == 16:
        return 'Discover'
    elif 50 < int(n[:2]) < 56 and len(n) == 16:
        return "Mastercard"
    elif int(n[0]) == 4 and (len(n) == 13 or len(n) == 16):
        return "VISA"
    else:
        return 'Unknown'