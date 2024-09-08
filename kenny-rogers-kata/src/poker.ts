export class Suit {
    suitSymbol: string;
    value: number;

    constructor(suitSymbol: string, value:number){
        this.suitSymbol = suitSymbol;
        this.value = value;
    }

    public static SPADES = new Suit('♠', 4);
    public static HEARTS = new Suit('♥', 3);
    public static CLUBS = new Suit('♣', 2);
    public static DIAMONDS = new Suit('♦', 1);

    toString(): string{
        return this.suitSymbol;
    }
}

export class Rank {
    rankName: string;
    value: number;

    constructor(rankName: string, value: number){
        this.rankName = rankName;
        this.value = value;
    }

    public static TWO = new Rank('2', 2);
    public static THREE = new Rank ('3', 3);
    public static FOUR = new Rank ('4', 4);
    public static FIVE = new Rank ('5', 5);
    public static SIX = new Rank ('6', 6);
    public static SEVEN = new Rank ('7', 7);
    public static EIGHT = new Rank ('8', 8);
    public static NINE = new Rank ('9', 9);
    public static TEN = new Rank ('10', 10);
    public static JACK = new Rank ('J', 11);
    public static QUEEN = new Rank ('Q', 12);
    public static KING = new Rank ('K', 13);
    public static ACE = new Rank ('A', 14);

    toString(): string {
        return this.rankName;
    }

}

export class Card {
    rank: Rank;
    suit: Suit;

    constructor(rank:Rank, suit:Suit){
        this.rank = rank;
        this.suit = suit;
    }

    toString(): string {
        return this.rank.toString() + this.suit.toString();
    }

    compare(that:Card): number{
        let rankDifference = this.rank.value - that.rank.value;
        return rankDifference != 0 ? rankDifference : this.suit.value - that.suit.value;
    }
}

export class Hand {
    cards: Card[];

    constructor(cards: Card[]){
        this.cards = cards;
    }

    toString(): string{
        let string: string = '';
        this.cards.forEach( (card, index) =>{
            string += index > 0 ? ', ' : '';
            string += card.toString();
        })
        return string;
    }

    sort(): Hand{
        this.cards.sort( (a, b) => a.compare(b));
        return this;
    }

    compare(that:Hand): number{
        return this.getHighCard().compare(that.getHighCard());
    }


    getHighCard(): Card{
        this.sort();
        return this.cards[this.cards.length-1];
    }

    rankCounts(): Map<Rank, number>{
        let rankCountMap = new Map<Rank, number>();

        this.cards.forEach( card => {
            rankCountMap.set( card.rank, rankCountMap.has(card.rank) ? rankCountMap.get(card.rank)! + 1 : 1 );

        });

        return rankCountMap;
    }

    straightOrFlush(): number{
        this.sort();

        let previousRankValue: number = this.cards[0].rank.value;
        let handSuit: Suit = this.cards[0].suit;
        let isStraight = true;
        let isFlush = true;

        for (let i = 1; i < this.cards.length; i++){
            let card = this.cards[i];

            if (isStraight && card.rank.value - previousRankValue != 1){
                isStraight = false;
            } else if (isStraight){
                previousRankValue = card.rank.value;
            }
            
            if (isFlush && handSuit != card.suit){
                isFlush = false;
            }
        }

        if (isFlush && isStraight){
            return this.getHighCard().rank.value == 14 ? HandRanks.ROYAL_FLUSH : HandRanks.STRAIGHT_FLUSH;
        } else if (isFlush){
            return HandRanks.FLUSH;
        } else if (isStraight){
            return HandRanks.STRAIGHT;
        } else {
            return HandRanks.HIGH_CARD;
        }
    }

    scoreHand(): number{
        let rankCounts = this.rankCounts();
        let topRank: Rank;
        let topCount: number = 0;
        let secondPairRank;

        rankCounts.forEach( (count, rank) => {
            if(count == topCount && topCount > 1){
                if (rank > topRank){
                    secondPairRank = topRank;
                    topRank = rank;
                } else {
                    secondPairRank = rank;
                }
            } else if ( count > topCount && topCount > 1){
                secondPairRank = topRank;
                topRank = rank;
                topCount = count;
            } else if ( count < topCount && count > 1){
                secondPairRank = rank;
            } else if (count > topCount){
                topCount = count;
                topRank = rank;
            }
        });

        let bestHandMultiples: number = 0;
        let straightsAndFlushes: number = this.straightOrFlush();

        switch (topCount) {
            case 5:
                bestHandMultiples = HandRanks.FIVE_OF_A_KIND;
                break;
            case 4:
                bestHandMultiples = HandRanks.FOUR_OF_A_KIND;
                break;
            case 3:
                bestHandMultiples = secondPairRank ? HandRanks.FULL_HOUSE : HandRanks.THREE_OF_A_KIND;
                break;
            case 2:
                bestHandMultiples = secondPairRank ? HandRanks.TWO_PAIR : HandRanks.PAIR;
                break;
            default:
                bestHandMultiples =  HandRanks.HIGH_CARD;
                break;
        }

        return bestHandMultiples > straightsAndFlushes ? bestHandMultiples : straightsAndFlushes;

    }

}

export enum HandRanks {
    HIGH_CARD,
    PAIR,
    TWO_PAIR,
    THREE_OF_A_KIND,
    STRAIGHT,
    FLUSH,
    FULL_HOUSE,
    FOUR_OF_A_KIND,
    STRAIGHT_FLUSH,
    ROYAL_FLUSH,
    FIVE_OF_A_KIND
}