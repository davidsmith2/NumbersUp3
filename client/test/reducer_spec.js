import {expect} from 'chai';

import {reducer} from '../src/reducer';

describe('reducer', () => {

    describe('GUESS', () => {

        it('sets current guess', () => {
            const state = {
                currentGuess: '-'
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
                guessesMade: 0
            };
            const action = {
                type: 'GUESS',
                number: 2
            };
            const nextState = reducer(state, action);
            expect(nextState.guessesMade).to.equal(1);
        });

        describe('guess accuracy', () => {

            it('handles high guesses', () => {
                const state = {
                    secretNumber: 1
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
                    secretNumber: 2
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
                    secretNumber: 2
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
