import {expect} from 'chai';
import 'babel-polyfill';

import {reducer} from '../src/reducer';

describe('reducer', () => {

    describe('GUESS', () => {

        it('sets current guess', () => {
            const state = {
                currentGuess: '-',
                guesses: []
            };
            const action = {
                type: 'GUESS',
                number: 2
            };
            const nextState = reducer(state, action);
            expect(nextState.currentGuess).to.equal(2);
        });

        it('increments guesses made', () => {
            const state = {
                guessesMade: 0,
                guesses: []
            };
            const action = {
                type: 'GUESS',
                number: 2
            };
            const nextState = reducer(state, action);
            expect(nextState.guessesMade).to.equal(1);
        });

        it('records the guess', () => {
            const state = {
                guesses: []
            };
            const action = {
                type: 'GUESS',
                number: 2
            };
            const nextState = reducer(state, action);
            expect(!!nextState.guesses.find((obj) => obj.number === 2)).to.equal(true);
        });

        describe('result', () => {

            it('tells the user when the game has been won', () => {
                const state = {
                    secretNumber: 1,
                    guesses: []
                };
                const action = {
                    type: 'GUESS',
                    number: 1
                };
                const nextState = reducer(state, action);
                expect(nextState.result).to.equal('Win');
            });

            it('tells the user when the game has been lost', () => {
                const state = {
                    secretNumber: 1,
                    guesses: [],
                    guessesAllowed: 1,
                    guessesMade: 0
                };
                const action = {
                    type: 'GUESS',
                    number: 2
                };
                const nextState = reducer(state, action);
                expect(nextState.result).to.equal('Lose');
            });

            it('tells the user when the game is in progress', () => {
                const state = {
                    secretNumber: 1,
                    guesses: [],
                    guessesAllowed: 2,
                    guessesMade: 0
                };
                const action = {
                    type: 'GUESS',
                    number: 2
                };
                const nextState = reducer(state, action);
                expect(nextState.result).to.equal(false);
            });

        });

        describe('guess accuracy', () => {

            it('handles high guesses', () => {
                const state = {
                    secretNumber: 1,
                    guesses: []
                };
                const action = {
                    type: 'GUESS',
                    number: 2
                };
                const nextState = reducer(state, action);
                expect(nextState.guessAccuracy).to.equal('High');
            });

            it('handles low guesses', () => {
                const state = {
                    secretNumber: 2,
                    guesses: []
                };
                const action = {
                    type: 'GUESS',
                    number: 1
                };
                const nextState = reducer(state, action);
                expect(nextState.guessAccuracy).to.equal('Low');
            });

            it('handles correct guesses', () => {
                const state = {
                    secretNumber: 2,
                    guesses: []
                };
                const action = {
                    type: 'GUESS',
                    number: 2
                };
                const nextState = reducer(state, action);
                expect(nextState.guessAccuracy).to.equal('Match');
            });

        });

    });

});
