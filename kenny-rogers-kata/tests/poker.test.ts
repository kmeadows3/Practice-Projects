import {describe, test, expect} from 'vitest';
import {Suit, Rank} from '../src/poker.ts';

const SUITS = [
    Suit.SPADES,
    Suit.HEARTS,
    Suit.CLUBS,
    Suit.DIAMONDS
];

const RANKS = [
    Rank.TWO,
    Rank.THREE,
    Rank.FOUR,
    Rank.FIVE,
    Rank.SIX,
    Rank.SEVEN,
    Rank.EIGHT,
    Rank.NINE,
    Rank.TEN,
    Rank.JACK,
    Rank.QUEEN,
    Rank.KING,
    Rank.ACE
]

describe ('SUITS', () => {
    test('Suit.SPADES returns "♠"', () =>{
        expect(Suit.SPADES).toBe('♠');
    });
    test('Suit.HEARTS returns "♥"', () =>{
        expect(Suit.HEARTS).toBe('♥');
    });
    test('Suit.CLUBS returns "♣"', () =>{
        expect(Suit.CLUBS).toBe('♣');
    });
    test('Suit.DIAMONDS returns "♦"', () =>{
        expect(Suit.DIAMONDS).toBe('♦');
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
   
})
    