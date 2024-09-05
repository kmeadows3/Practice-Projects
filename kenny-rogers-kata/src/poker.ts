export enum Suit {
    SPADES = '♠',
    HEARTS = '♥',
    CLUBS = '♣',
    DIAMONDS = '♦'
}


export class Rank {
    rankName: String;
    value: number;

    constructor(rankName: String, value: number){
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

    toString(): String {
        return this.rankName;
    }

}