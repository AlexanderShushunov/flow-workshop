// @flow
import * as React from 'react';
import {isNormalCell, TicTacToe} from '../game';
import {Layout} from './layout';
import type {Snapshot} from '../game';

export class Controller extends React.Component<{||}, { snapshot: Snapshot }> {

    state = {
        snapshot: TicTacToe.initial()
    };

    #selectCell = (row, column) => this.setState(
        ({snapshot}) => ({
            snapshot: TicTacToe.next(snapshot, row, column)
        })
    );

    #cheat =  (row, column) => this.setState(
        ({snapshot}) => ({
            snapshot: TicTacToe.cheat(snapshot, row, column)
        })
    );
    resetGame = () => this.setState({
        snapshot: TicTacToe.initial()
    });

    #isWinCell = (row, column) => !isNormalCell(this.state.snapshot)(row, column);

    render() {
        return (<Layout
            onResetClick={this.resetGame}
            snapshot={this.state.snapshot}
            isWinCell={this.#isWinCell}
            onCellClick={this.#selectCell}
            onCheat={this.#cheat}
            canReset={this.state.snapshot.result !== 'turn'}
        />);
    }
}

