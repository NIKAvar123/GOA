def rock_paper_scissors(player1, player2):
    # შესაძლო არჩევანი
    moves = ['rock', 'paper', 'scissors']
    
    # არჩევანის სწორების შემოწმება
    if player1 not in moves or player2 not in moves:
        return "Error: Invalid move! Use 'rock', 'paper', or 'scissors'."
    
    # ფრეს შემოწმება
    if player1 == player2:
        return "Draw!"
    
    # გამარჯვება
    if (player1 == 'rock' and player2 == 'scissors') or \
       (player1 == 'scissors' and player2 == 'paper') or \
       (player1 == 'paper' and player2 == 'rock'):
        return "Player 1 wins!"
    else:
        return "Player 2 wins!"

# ტესტი
print(rock_paper_scissors('rock', 'scissors'))  # Player 1 wins!
print(rock_paper_scissors('rock', 'rock'))      # Draw!
print(rock_paper_scissors('paper', 'scissors')) # Player 2 wins!
