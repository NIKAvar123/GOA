def count_positives_sum_negatives(arr):
    if not arr:
        return []
    pos_count = sum(1 for x in arr if x > 0)  
    neg_sum = sum(x for x in arr if x < 0)  
    return [pos_count, neg_sum]
