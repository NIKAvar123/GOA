from collections import Counter

def is_flush(cards):
    suits = [card[-1] for card in cards]
    return len(Counter(suits)) == 1  


print(is_flush(["5h", "10h", "Jh", "Qh", "Ah"]))  
print(is_flush(["5h", "10d", "Jh", "Qh", "Ah"]))  