def calculate_score(stats):
    """ ქულების გამოთვლა თითოეული მოთამაშისთვის """
    strength, speed, intelligence = stats
    score = strength * 1 + speed * 2 + (strength + speed) * intelligence / 10
    return score

def compare_players(player1_stats, player2_stats):
    """ შედარების ფუნქცია, რომელიც გამოავლენს გამარჯვებულს """
    player1_score = calculate_score(player1_stats)
    player2_score = calculate_score(player2_stats)
    
    # გამარჯვებული
    if player1_score > player2_score:
        return f"Player 1 wins with score {player1_score:.2f} vs {player2_score:.2f}"
    elif player2_score > player1_score:
        return f"Player 2 wins with score {player2_score:.2f} vs {player1_score:.2f}"
    else:
        return f"Draw! Both players scored {player1_score:.2f}"

# ტესტი
player1 = [5, 7, 8]  # [ძალა, სისწრაფე, ინტელექტი]
player2 = [6, 6, 7]  # [ძალა, სისწრაფე, ინტელექტი]

print(compare_players(player1, player2))
