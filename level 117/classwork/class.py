class BatmanQuotes(object):

    @staticmethod
    def get_quote(quotes, hero):
        for i in range(len(hero)):
            try:
                index = int(hero[i])
                for name in ('Batman', 'Robin', 'Joker'):
                    if hero[:i]+name[i]+hero[i+1:] == name:
                        return name + ': ' + quotes[index]
            except ValueError:
                continue