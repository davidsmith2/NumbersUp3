import {expect} from 'chai';
import 'babel-polyfill';

import {reducer} from '../app/reducer';

describe('reducer', () => {

    describe('PLAY', () => {

        it('starts a game', () => {
            const state = {
                dialog: 'splash'
            };
            const action = {
                type: 'PLAY'
            };
            const nextState = reducer(state, action);
            expect(nextState.dialog).to.equal(false);
        });

    });

    describe('OPEN_SETTINGS', () => {

        it('opens the settings dialog', () => {
            const state = {
                dialog: 'splash'
            };
            const action = {
                type: 'OPEN_SETTINGS'
            };
            const nextState = reducer(state, action);
            expect(nextState.dialog).to.equal('settings');
        });

    });

    describe('SAVE_SETTINGS', () => {

        it('saves number of guesses allowed', () => {
            const state = {
                guessesAllowed: 7,
                tiles: 100
            };
            const action = {
                type: 'SAVE_SETTINGS',
                payload: {
                    guessesAllowed: 10,
                    tiles: 50
                }
            };
            const nextState = reducer(state, action);
            expect(nextState.guessesAllowed).to.equal(10);
            expect(nextState.tiles.length).to.equal(50);
        });

        it('returns the user to the splash dialog', () => {
            const state = {
                dialog: 'settings'
            };
            const action = {
                type: 'SAVE_SETTINGS',
                payload: {
                    guessesAllowed: 10,
                    tiles: 50
                }
            };
            const nextState = reducer(state, action);
            expect(nextState.dialog).to.equal('splash');
        });

    });

    describe('CANCEL_SETTINGS', () => {

        it('returns to the splash dialog', () => {
            const state = {
                dialog: 'settings'
            };
            const action = {
                type: 'CANCEL_SETTINGS'
            };
            const nextState = reducer(state, action);
            expect(nextState.dialog).to.equal('splash');
        });

    });

    describe('REPLAY', () => {

        it('returns to the game', () => {
            const state = {
                dialog: 'result',
                result: 'win',
                guessesMade: 3,
                tiles: [{number: 1}]
            };
            const action = {
                type: 'REPLAY'
            };
            const nextState = reducer(state, action);
            expect(nextState.dialog).to.equal(false);
            expect(nextState.result).to.equal(null);
            expect(nextState.guessesMade).to.equal(0);
        });

    });

    describe('QUIT', () => {

        it('returns to the splash dialog', () => {
            const state = {
                dialog: 'result',
                tiles: [{number: 1}]
            };
            const action = {
                type: 'QUIT'
            };
            const nextState = reducer(state, action);
            expect(nextState.dialog).to.equal('splash');
        });

    });

    describe('GUESS', () => {

        it('tracks the current guess', () => {
            const state = {
                currentGuess: '-',
                guesses: [],
                tiles: [{number: 2}]
            };
            const action = {
                type: 'GUESS',
                payload: {number: 2}
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
                payload: {number: 2}
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
                payload: {number: 2}
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
                    payload: {number: 1}
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
                    payload: {number: 2}
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
                    payload: {number: 2}
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
                    payload: {number: 2}
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
                    payload: {number: 1}
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
                    payload: {number: 2}
                };
                const nextState = reducer(state, action);
                expect(nextState.guessAccuracy).to.equal('Match');
            });

        });

    });

    describe('GAME', () => {

        it('is won if the player guesses the secret number', () => {
            const actions = [
                {type: 'PLAY'},
                {type: 'GUESS', payload: {number: 1}},
                {type: 'GUESS', payload: {number: 2}}
            ];
            const finalState = actions.reduce(reducer, {
                secretNumber: 2,
                tiles: [
                    {number: 1},
                    {number: 2},
                    {number: 3}
                ],
                guessesAllowed: 2,
                guessesMade: 0,
                guesses: []
            });
            expect(finalState.result).to.equal('Win');
        });

        it('is lost if the player fails to guess the secret number', () => {
            const actions = [
                {type: 'PLAY'},
                {type: 'GUESS', payload: {number: 1}},
                {type: 'GUESS', payload: {number: 2}}
            ];
            const finalState = actions.reduce(reducer, {
                secretNumber: 3,
                tiles: [
                    {number: 1},
                    {number: 2},
                    {number: 3}
                ],
                guessesAllowed: 2,
                guessesMade: 0,
                guesses: []
            });
            expect(finalState.result).to.equal('Lose');
        });

    });

});
