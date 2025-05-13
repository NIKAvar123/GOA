def solve(a,b):
    unique=[]
    for i in a:
        if i not in b:
            unique.append(i)
    for i in b:
        if i not in a:
            unique.append(i)
            
    return "".join(unique)  






def define_suit(card):
    if '♣' in card:
        return 'clubs'
    elif '♦' in card:
        return 'diamonds'
    elif '♥' in card:
        return 'hearts'
    elif '♠' in card:
        return 'spades'


def stairs_in_20(stairs):
    one_year_total = sum(sum(day) for day in stairs)  
    return one_year_total * 20                        






import random

def r_p_s_cheat(choice):
    win_map = {
        'rock': 'paper',
        'paper': 'scissors',
        'scissors': 'rock'
    }
    lose_map = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    }


    if random.random() < 0.9:  
        return win_map[choice]
    else:                     
        return lose_map[choice]





import random
def r_p_s_cheat(choice):
    win_dict = {
        "paper" : "rock",
        "rock" : "scissors",
        "scissors" : "paper"
    }
    lose_dict = {
        "paper" : "scissors",
        "scissors" :"rock",
        "rock" : "paper"
    }
    arr = list(range(10))
    random.shuffle(arr)

    if arr[0] == 9:
        return win_dict[choice]
    else:
        return lose_dict[choice]
    




def two_oldest_ages(ages):
    return sorted(ages)[-2:]
