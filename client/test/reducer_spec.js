import {expect} from 'chai';
import 'babel-polyfill';

import {reducer} from '../src/reducer';

describe('reducer', () => {

    describe('GUESS', () => {

        it('tracks the current guess', () => {
            const state = {
                currentGuess: '-',
                guesses: [],
                tiles: [{number: 2}]
            };
            const action = {
                type: 'GUESS',
                tile: {number: 2}
            };
            const nextState = reducer(state, action);
            expect(nextState.currentGuess).to.equal(2);
        });

        it('increments the number of guesses made', () => {
            const state = {
                guessesMade: 0,
                guesses: [],
                tiles: [{number: 2}]
            };
            const action = {
                type: 'GUESS',
                tile: {number: 2}
            };
            const nextState = reducer(state, action);
            expect(nextState.guessesMade).to.equal(1);
        });

        it('records the user\'s guesses', () => {
            const state = {
                guesses: [],
                tiles: [{number: 2}]
            };
            const action = {
                type: 'GUESS',
                tile: {number: 2}
            };
            const nextState = reducer(state, action);
            expect(!!nextState.guesses.find((obj) => obj.number === 2)).to.equal(true);
        });

        describe('result', () => {

            it('tells the user when the game has been won', () => {
                const state = {
                    secretNumber: 1,
                    guesses: [],
                    tiles: [{number: 1}]
                };
                const action = {
                    type: 'GUESS',
                    tile: {number: 1}
                };
                const nextState = reducer(state, action);
                expect(nextState.result).to.equal('Win');
            });

            it('tells the user when the game has been lost', () => {
                const state = {
                    secretNumber: 1,
                    guesses: [],
                    guessesAllowed: 1,
                    guessesMade: 0,
                    tiles: [{number: 2}]
                };
                const action = {
                    type: 'GUESS',
                    tile: {number: 2}
                };
                const nextState = reducer(state, action);
                expect(nextState.result).to.equal('Lose');
            });

            it('tells the user when the game is in progress', () => {
                const state = {
                    secretNumber: 1,
                    guesses: [],
                    guessesAllowed: 2,
                    guessesMade: 0,
                    tiles: [{number: 2}]
                };
                const action = {
                    type: 'GUESS',
                    tile: {number: 2}
                };
                const nextState = reducer(state, action);
                expect(nextState.result).to.equal(false);
            });

        });

        describe('guess accuracy', () => {

            it('tells the user if they\'ve guessed high', () => {
                const state = {
                    secretNumber: 1,
                    guesses: [],
                    tiles: [{number: 2}]
                };
                const action = {
                    type: 'GUESS',
                    tile: {number: 2}
                };
                const nextState = reducer(state, action);
                expect(nextState.guessAccuracy).to.equal('High');
            });

            it('tells the user if they\'ve guessed low', () => {
                const state = {
                    secretNumber: 2,
                    guesses: [],
                    tiles: [{number: 1}]
                };
                const action = {
                    type: 'GUESS',
                    tile: {number: 1}
                };
                const nextState = reducer(state, action);
                expect(nextState.guessAccuracy).to.equal('Low');
            });

            it('tells the user if they\'ve guessed correctly', () => {
                const state = {
                    secretNumber: 2,
                    guesses: [],
                    tiles: [{number: 2}]
                };
                const action = {
                    type: 'GUESS',
                    tile: {number: 2}
                };
                const nextState = reducer(state, action);
                expect(nextState.guessAccuracy).to.equal('Match');
            });

        });

    });

});
    