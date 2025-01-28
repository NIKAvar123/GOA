import math

def match(usefulness, months):

    total_usefulness = sum(usefulness)

    initial_needs = 100
    decay_rate = 0.85 
    adjusted_needs = initial_needs * (decay_rate ** months)

    if total_usefulness >= adjusted_needs:
        return "Match!"
    else:
        return "No match!"