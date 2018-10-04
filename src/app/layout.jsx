// @flow
import React from 'react';
import './layout.css';
import {ResetButton} from '../components/reset-button';
import {Board} from '../components/board';
import {Info} from '../components/info';
import type {Snapshot} from '../game';

type LayoutProps = {
    onResetClick: () => mixed, // Function Types
    snapshot: Snapshot,
    isWinCell: (number, number) => boolean,
    onCellClick: (number, number) => mixed,
    onCheat: (number, number) => mixed,
    canReset: boolean
}

export const Layout =
    ({
         onResetClick,
         snapshot,
         isWinCell,
         onCellClick,
         onCheat,
         canReset
     }: LayoutProps) => (
        <div className="layout">
            <ResetButton onClick={onResetClick} disabled={!canReset}/>
            <div className="layout__field-container">
                <Board
                    field={snapshot.field}
                    onCellClick={onCellClick}
                    onCheat={onCheat}
                    isWinCell={isWinCell}
                />
            </div>
            <Info snapshot={snapshot} />
        </div>
    );
