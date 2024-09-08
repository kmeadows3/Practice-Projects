import {describe, test, expect} from 'vitest';
import {Suit, Rank, HandRanks} from '../src/poker.ts';
import * as testConsts from './consts.ts';
import { execPath } from 'process';

describe ('SUITS', () => {
    describe ('toString', ()=>{
        test('Suit.SPADES toString returns "♠"', () =>{
            expect(Suit.SPADES.toString()).toBe('♠');
        });
        test('Suit.HEARTS toString returns "♥"', () =>{
            expect(Suit.HEARTS.toString()).toBe('♥');
        });
        test('Suit.CLUBS toString returns "♣"', () =>{
            expect(Suit.CLUBS.toString()).toBe('♣');
        });
        test('Suit.DIAMONDS toString returns "♦"', () =>{
            expect(Suit.DIAMONDS.toString()).toBe('♦');
        });
    });

});

describe ('RANKS', ()=> {
    describe ('toString', () => {
         test ('Rank.TWO toString returns "2"', ()=>{
            expect(Rank.TWO.toString()).toBe('2');
        });
        test ('Rank.TWO toString returns "3"', ()=>{
            expect(Rank.THREE.toString()).toBe('3');
        });
        test ('Rank.TWO toString returns "4"', ()=>{
            expect(Rank.FOUR.toString()).toBe('4');
        });
        test ('Rank.FIVE toString returns "5"', ()=>{
            expect(Rank.FIVE.toString()).toBe('5');
        });
        test ('Rank.FIVE toString returns "6"', ()=>{
            expect(Rank.SIX.toString()).toBe('6');
        });
        test ('Rank.FIVE toString returns "7"', ()=>{
            expect(Rank.SEVEN.toString()).toBe('7');
        });
        test ('Rank.FIVE toString returns "8"', ()=>{
            expect(Rank.EIGHT.toString()).toBe('8');
        });
        test ('Rank.FIVE toString returns "9"', ()=>{
            expect(Rank.NINE.toString()).toBe('9');
        });
        test ('Rank.FIVE toString returns "10"', ()=>{
            expect(Rank.TEN.toString()).toBe('10');
        });
        test ('Rank.JACK toString returns "J"', ()=>{
            expect(Rank.JACK.toString()).toBe('J');
        });
        test ('Rank.QUEEN toString returns "Q"', ()=>{
            expect(Rank.QUEEN.toString()).toBe('Q');
        });
        test ('Rank.KING toString returns "K"', ()=>{
            expect(Rank.KING.toString()).toBe('K');
        });
        test ('Rank.ACE toString returns "A"', ()=>{
            expect(Rank.ACE.toString()).toBe('A');
        });
    });
    describe ('value', ()=>{

        test ('Rank.TWO value returns 2', ()=> {
            expect(Rank.TWO.value).toBe(2);
        });
        test ('Rank.THREE value returns 3', ()=> {
            expect(Rank.THREE.value).toBe(3);
        });
        test ('Rank.FOUR value returns 4', ()=> {
            expect(Rank.FOUR.value).toBe(4);
        });
        test ('Rank.FIVE value returns 5', ()=> {
            expect(Rank.FIVE.value).toBe(5);
        });
        test ('Rank.SIX value returns 6', ()=> {
            expect(Rank.SIX.value).toBe(6);
        });
        test ('Rank.SEVEN value returns 7', ()=> {
            expect(Rank.SEVEN.value).toBe(7);
        });
        test ('Rank.EIGHT value returns 8', ()=> {
            expect(Rank.EIGHT.value).toBe(8);
        });
        test ('Rank.NINE value returns 9', ()=> {
            expect(Rank.NINE.value).toBe(9);
        });
        test ('Rank.TEN value returns 10', ()=> {
            expect(Rank.TEN.value).toBe(10);
        });
        test ('Rank.JACK value returns 11', ()=> {
            expect(Rank.JACK.value).toBe(11);
        });
        test ('Rank.QUEEN value returns 12', ()=> {
            expect(Rank.QUEEN.value).toBe(12);
        });
        test ('Rank.KING value returns 13', ()=> {
            expect(Rank.KING.value).toBe(13);
        });
        test ('Rank.ACE value returns 14', ()=> {
            expect(Rank.ACE.value).toBe(14);
        });
    });
});

describe('CARDS', ()=> {
    describe ('toString', ()=> {
        test('Jack of Hearts toString returns J♥', ()=> {
            expect(testConsts.JACK_OF_HEARTS.toString()).toEqual('J♥');
        });
        test('Two of Spades returns 2♠', ()=> {
            expect(testConsts.TWO_OF_SPADES.toString()).toEqual('2♠');
        });
        test('Ace of Diamonds returns A♦', ()=> {
            expect(testConsts.ACE_OF_DIAMONDS.toString()).toEqual('A♦');
        });
        test('Eight of Clubs returns 8♣', ()=> {
            expect(testConsts.EIGHT_OF_CLUBS.toString()).toEqual('8♣');
        });
    });
    describe ('compare', ()=> {
        test('three of spades returns zero when compared to a different three of spades', ()=> {
            expect(testConsts.THREE_OF_SPADES.compare(testConsts.OTHER_THREE_OF_SPADES)).toBe(0);
        });
        test('three of spades returns negative when compared to four of spades', ()=>{
            expect(testConsts.THREE_OF_SPADES.compare(testConsts.FOUR_OF_SPADES)).toBeLessThan(0);
        });
        test('three of spades returns positive when compared to two of spades', ()=> {
            expect(testConsts.THREE_OF_SPADES.compare(testConsts.TWO_OF_SPADES)).toBeGreaterThan(0);
        });
        test('three of spades returns positive when compared to a three of hearts', ()=> {
            expect(testConsts.THREE_OF_SPADES.compare(testConsts.THREE_OF_HEARTS)).toBeGreaterThan(0);
        });
        test('three of hearts returns negative when compared to a three of spades', ()=> {
            expect(testConsts.THREE_OF_HEARTS.compare(testConsts.THREE_OF_SPADES)).toBeLessThan(0);
        });
        test('three of spades returns negative when compared to Ace of Diamonds', ()=> {
            expect(testConsts.THREE_OF_SPADES.compare(testConsts.ACE_OF_DIAMONDS)).toBeLessThan(0);
        });
        test('Ace of diamonds returns positive when compared to jack of hearts', ()=>{
            expect(testConsts.ACE_OF_DIAMONDS.compare(testConsts.JACK_OF_HEARTS)).toBeGreaterThan(0);
        });
    });
});

describe('HANDS', ()=>{
    describe('toString', ()=>{
        test('Ace High Hand returns "J♥, 2♠, A♦, 8♣, 3♠"', ()=>{
            expect(testConsts.ACE_HIGH_HAND.toString()).toBe('J♥, 2♠, A♦, 8♣, 3♠');
        });        
        test('Pair of Twos Hand returns "2♥, 2♠, A♦, 8♣, 3♠"', ()=>{
            expect(testConsts.PAIR_OF_TWOS_HAND.toString()).toBe('2♥, 2♠, A♦, 8♣, 3♠');
        });       
    });
    describe('sort', ()=>{
        test('Ace High Hand returns "2♠, 3♠, 8♣, J♥, A♦" after sorting', ()=>{
            expect(testConsts.ACE_HIGH_HAND.sort().toString()).toBe('2♠, 3♠, 8♣, J♥, A♦');
        });
        test('Pair of Twos Hand returns "2♥, 2♠, 3♠, 8♣, A♦" after sorting', ()=>{
            expect(testConsts.PAIR_OF_TWOS_HAND.sort().toString()).toBe('2♥, 2♠, 3♠, 8♣, A♦');
        });
        test('Three eight hand returns "8♦, 8♣, 8♥, J♥, A♦"', ()=>{
            expect(testConsts.THREE_EIGHT_HAND.sort().toString()).toBe('8♦, 8♣, 8♥, J♥, A♦');
        })
    });
    describe('getHighCard', ()=>{
        test('Ace High Hand returns Ace of Diamonds as high card', ()=>{
            expect(testConsts.ACE_HIGH_HAND.getHighCard()).toEqual(testConsts.ACE_OF_DIAMONDS);
        });
        test('Seven High Hand returns Seven of Hearts as high card', ()=>{
            expect(testConsts.SEVEN_HIGH_HAND.getHighCard()).toEqual(testConsts.SEVEN_OF_HEARTS);
        });
        test('Five of a kind high returns Ace of Spades as high card', ()=>{
            expect(testConsts.FIVE_OF_A_KIND_HIGH.getHighCard()).toEqual(testConsts.ACE_OF_SPADES);
        });
        test('Six card had returns Ace of Clubs as high card', ()=>{
            expect(testConsts.SIX_CARDS.getHighCard()).toEqual(testConsts.ACE_OF_CLUBS);
        });       
    });
    describe('rankCounts', ()=>{
        test('Ace high hand returns 1 two, 1 three, 1 eight, 1 jack, and 1 ace', ()=>{
            let resultMap = new Map<Rank, number>([
                [Rank.TWO, 1],
                [Rank.THREE, 1],
                [Rank.EIGHT, 1],
                [Rank.JACK, 1],
                [Rank.ACE, 1]
            ]);

            expect(testConsts.ACE_HIGH_HAND.rankCounts()).toEqual(resultMap);
        });
        test('Five of a kind low hand return 5 twos', ()=>{
            let resultMap = new Map<Rank, number>([
                [Rank.TWO, 5]
            ]);
            expect(testConsts.FIVE_OF_A_KIND_LOW.rankCounts()).toEqual(resultMap);
        });
        test('Full house low returns 3 twos and 2 aces', ()=> {
            let resultMap = new Map<Rank, number>([
                [Rank.TWO, 3],
                [Rank.ACE, 2]
            ]);
            expect(testConsts.LOW_FULL_HOUSE_HAND.rankCounts()).toEqual(resultMap);
        });
        test('Two pair 8s and 2s hand returns 2 twos, 1 three, and 2 eights', ()=>{
            let resultMap = new Map<Rank, number>([
                [Rank.TWO, 2],
                [Rank.THREE, 1],
                [Rank.EIGHT, 2]
            ]);
            expect(testConsts.TWO_PAIR_TWOS_AND_EIGHTS_HAND.rankCounts()).toEqual(resultMap);
        });
    });
    describe('straightOrFlush', ()=> {
        test('Low straight returns straight', ()=>{
            expect(testConsts.LOW_STRAIGHT_HAND.straightOrFlush()).toBe(HandRanks.STRAIGHT);
        });
        test('Royal flush returns Royal Flush', ()=>{
            expect(testConsts.ROYAL_FLUSH.straightOrFlush()).toBe(HandRanks.ROYAL_FLUSH);
        });
        test('Straight flush low hand returns Straight Flush', ()=>{
            expect(testConsts.STRAIGHT_FLUSH_LOW_HAND.straightOrFlush()).toBe(HandRanks.STRAIGHT_FLUSH);
        });
        test('Low flush hand returns flush', ()=>{
            expect(testConsts.LOW_FLUSH_HAND.straightOrFlush()).toBe(HandRanks.FLUSH);
        })
        test('Five of a kind high returns high card', ()=>{
            expect(testConsts.FIVE_OF_A_KIND_HIGH.straightOrFlush()).toBe(HandRanks.HIGH_CARD);
        });
    });
    describe('scoreHand', () => {
        test('Ace high hand returns High Card', ()=>{
            expect(testConsts.ACE_HIGH_HAND.scoreHand()[0]).toBe(HandRanks.HIGH_CARD);
            expect(testConsts.ACE_HIGH_HAND.scoreHand()[1]).toBe(Rank.ACE.value);
        });
        test('Pair of twos hand returns Pair', ()=>{
            expect(testConsts.PAIR_OF_TWOS_HAND.scoreHand()[0]).toBe(HandRanks.PAIR);
            expect(testConsts.PAIR_OF_TWOS_HAND.scoreHand()[1]).toBe(Rank.TWO.value);
        });
        test('Two Pair Twos and eights hand returns two pair', ()=>{
            expect(testConsts.TWO_PAIR_TWOS_AND_EIGHTS_HAND.scoreHand()[0]).toBe(HandRanks.TWO_PAIR);
            expect(testConsts.TWO_PAIR_TWOS_AND_EIGHTS_HAND.scoreHand()[1]).toBe(Rank.EIGHT.value);
        });
        test('Three twos hand returns three of a kind', ()=>{
            expect(testConsts.THREE_TWOS_HAND.scoreHand()[0]).toBe(HandRanks.THREE_OF_A_KIND);
            expect(testConsts.THREE_TWOS_HAND.scoreHand()[1]).toBe(Rank.TWO.value);
        });
        test('Low straight hand returns straight', ()=>{
            expect(testConsts.LOW_STRAIGHT_HAND.scoreHand()[0]).toBe(HandRanks.STRAIGHT);
            expect(testConsts.LOW_STRAIGHT_HAND.scoreHand()[1]).toBe(Rank.SIX.value);
        });
        test('Low flush returns flush', ()=>{
            expect(testConsts.LOW_FLUSH_HAND.scoreHand()[0]).toBe(HandRanks.FLUSH);
            expect(testConsts.LOW_FLUSH_HAND.scoreHand()[1]).toBe(Rank.NINE.value);
        });
        test('Low full house hand returns full house', ()=>{
            expect(testConsts.LOW_FULL_HOUSE_HAND.scoreHand()[0]).toBe(HandRanks.FULL_HOUSE);
            expect(testConsts.LOW_FULL_HOUSE_HAND.scoreHand()[1]).toBe(Rank.TWO.value);
        });
        test('Four of a kind low hand returns four of a kind', ()=>{
            expect(testConsts.FOUR_OF_A_KIND_LOW_HAND.scoreHand()[0]).toBe(HandRanks.FOUR_OF_A_KIND);
            expect(testConsts.FIVE_OF_A_KIND_LOW.scoreHand()[1]).toBe(Rank.TWO.value);
        });
        test('Low straight flush returns straight flush', ()=>{
            expect(testConsts.STRAIGHT_FLUSH_LOW_HAND.scoreHand()[0]).toBe(HandRanks.STRAIGHT_FLUSH);
            expect(testConsts.STRAIGHT_FLUSH_LOW_HAND.scoreHand()[1]).toBe(Rank.EIGHT.value);
        });
        test('Royal flush returns royal flush', ()=>{
            expect(testConsts.ROYAL_FLUSH.scoreHand()[0]).toBe(HandRanks.ROYAL_FLUSH);
            expect(testConsts.ROYAL_FLUSH.scoreHand()[1]).toBe(Rank.ACE.value);
        });
        test('Five of a kind low returns five of kind', ()=>{
            expect(testConsts.FIVE_OF_A_KIND_LOW.scoreHand()[0]).toBe(HandRanks.FIVE_OF_A_KIND);
            expect(testConsts.FIVE_OF_A_KIND_LOW.scoreHand()[1]).toBe(Rank.TWO.value);
        });
    });
    describe ('compare', ()=> {
        test('Ace high returns positive when compared to seven high', ()=>{
            expect(testConsts.ACE_HIGH_HAND.compare(testConsts.SEVEN_HIGH_HAND)).toBeGreaterThan(0);
        });
        test('Seven high returns negative when compared to ace high', ()=>{
            expect(testConsts.SEVEN_HIGH_HAND.compare(testConsts.ACE_HIGH_HAND)).toBeLessThan(0);
        });
        test('Pair of twos hand returns positive when compared to ace high hand', ()=>{
            expect(testConsts.PAIR_OF_TWOS_HAND.compare(testConsts.ACE_HIGH_HAND)).toBeGreaterThan(0);
        });
        test('Royal flush returns positive when compared to straight flush high hand', ()=>{
            expect(testConsts.ROYAL_FLUSH.compare(testConsts.STRAIGHT_FLUSH_HIGH_HAND)).toBeGreaterThan(0);
        });
        test('Pair of twos hand returns negative when compared to pair of eights hand', ()=> {
            expect(testConsts.PAIR_OF_TWOS_HAND.compare(testConsts.PAIR_OF_EIGHTS_HAND)).toBeLessThan(0);
        });
        test('Low full house hand negative when compared to high full house hand', ()=> {
            expect(testConsts.LOW_FULL_HOUSE_HAND.compare(testConsts.HIGH_FULL_HOUSE_HAND)).toBeLessThan(0);
        });
        test('Low full house hand positive when compared to tied lower full house hand', ()=> {
            expect(testConsts.LOW_FULL_HOUSE_HAND.compare(testConsts.TIED_LOWER_FULL_HOUSE_HAND)).toBeGreaterThan(0);
        });

    });


})
    