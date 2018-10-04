// @flow
import React from 'react';
import './cell.css';
import type {Token} from '../../game';

type CellProps = {
    token: Token,
    highlight: boolean,
    onSelect: () => mixed,
    onCheat: () => mixed
}

const onClick = (onSelect, onCheat) => (event: SyntheticMouseEvent<HTMLInputElement>) => {
    if (event.altKey) {
        onCheat()
    } else {
        onSelect();
    }
};

export const Cell = ({token, highlight, onSelect, onCheat}: CellProps) => (
    <input
        type='checkbox'
        className={`cell ${tokenToClass(token)} ${highlightToClass(highlight)}`}
        onClick={onClick(onSelect, onCheat)}
    />
);

function tokenToClass(token) {
    switch (token) {
        case 'X':
            return 'cell--X';
        case 'O':
            return 'cell--O';
        default:
            return '';
    }
}

function highlightToClass(highlight) {
    if (highlight) {
        return 'cell--highlight';
    } else {
        return '';
    }
}