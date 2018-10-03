import {TicTacToe} from './tic-tac-toe';

const EMPTY_FIELD = [
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty']
];

describe('TicTacToe.intial', () => {
    test('should have the correct field', () => {
        expect(
            TicTacToe.initial().field
        ).toEqual(EMPTY_FIELD);
    });
});

const winSnapshot = {
    result: 'win',
    field: EMPTY_FIELD,
    winner: 'X',
    winLine: []
};

const drawSnapshot = {
    result: 'draw',
    field: EMPTY_FIELD
};

const turnSnapshot = {
    result: 'turn',
    field: [
        ['X', 'empty', 'X'],
        ['empty', 'O', 'empty'],
        ['empty', 'empty', 'O']
    ],
    player: 'X'
};

describe('TicTacToe.next', () => {
    describe('should return the same snapshot if the game is over', () => {
        test('(win)', () => {
            expect(
                TicTacToe.next(winSnapshot, 0, 0)
            ).toBe(winSnapshot);
        });
        test('(draw)', () => {
            expect(
                TicTacToe.next(drawSnapshot, 0, 0)
            ).toBe(drawSnapshot);
        });
    });

    test('should return the same snapshot if the cell is occupied', () => {
        expect(
            TicTacToe.next(turnSnapshot, 0, 0)
        ).toBe(turnSnapshot);
    });

    test('should change a player, if the turn is correct', () => {
        expect(
            TicTacToe.next(turnSnapshot, 1, 0).player
        ).toBe('O');
    });

    test('should occupy the cell, if the turn is correct', () => {
        expect(
            TicTacToe.next(turnSnapshot, 1, 0).field[1][0]
        ).toBe('X');
    });

    test('should detect win winning turn', () => {
        expect(
            TicTacToe.next(turnSnapshot, 0, 1).result
        ).toBe('win');
    });
});

describe('TicTacToe.cheat', () => {
    describe('should return the same snapshot if the game is over', () => {
        test('(win)', () => {
            expect(
                TicTacToe.cheat(winSnapshot, 0, 0)
            ).toBe(winSnapshot);
        });
        test('(draw)', () => {
            expect(
                TicTacToe.cheat(drawSnapshot, 0, 0)
            ).toBe(drawSnapshot);
        });
    });

    test('should clean a cell if it is occupied', () => {
        expect(
            TicTacToe.cheat(turnSnapshot, 0, 0).field[0][0]
        ).toBe('empty');
    });

    describe('should not change a player', () => {
        test('point to X', () => {
            expect(
                TicTacToe.cheat(turnSnapshot, 0, 0).player
            ).toBe('X');
        });
        test('point to empty', () => {
            expect(
                TicTacToe.cheat(turnSnapshot, 0, 1).player
            ).toBe('X');
        });
        test('point to O', () => {
            expect(
                TicTacToe.cheat(turnSnapshot, 1, 1).player
            ).toBe('X');
        });
    });
});