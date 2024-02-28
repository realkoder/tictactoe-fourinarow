
export const generateBoardGrid = (row: number, col: number) => {
    return Array.from({ length: row }, () => Array.from({ length: col }, () => ""));
}


export const checkThreeInRow = (grid: grid): string | null => {
    const numRows = grid.length;
    const numCols = grid[0].length;

    // Check horizontally and vertically
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const currentSymbol = grid[row][col];
            if (currentSymbol === '') continue; // Skip empty cells

            // Check horizontally
            if (col <= numCols - 3 && 
                grid[row][col + 1] === currentSymbol &&
                grid[row][col + 2] === currentSymbol) {
                return currentSymbol;
            }

            // Check vertically
            if (row <= numRows - 3 &&
                grid[row + 1][col] === currentSymbol &&
                grid[row + 2][col] === currentSymbol) {
                return currentSymbol;
            }

            // Check diagonally (from top-left to bottom-right)
            if (col <= numCols - 3 && row <= numRows - 3 &&
                grid[row + 1][col + 1] === currentSymbol &&
                grid[row + 2][col + 2] === currentSymbol) {
                return currentSymbol;
            }

            // Check diagonally (from top-right to bottom-left)
            if (col >= 2 && row <= numRows - 3 &&
                grid[row + 1][col - 1] === currentSymbol &&
                grid[row + 2][col - 2] === currentSymbol) {
                return currentSymbol;
            }
        }
    }

    return null;
}

export const checkFourInRow = (grid: Grid) => {
    const numRows = grid.length;
    const numCols = grid[0].length;

    // Check horizontally
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col <= numCols - 4; col++) {
            const sequence = grid[row].slice(col, col + 4).join('');
            if (sequence === 'XXXX' || sequence === 'OOOO') {
                return sequence[0];
            }
        }
    }

    // Check vertically
    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row <= numRows - 4; row++) {
            const sequence = [grid[row][col], grid[row + 1][col], grid[row + 2][col], grid[row + 3][col]].join('');
            if (sequence === 'XXXX' || sequence === 'OOOO') {
                return sequence[0];
            }
        }
    }

    // Check diagonally (from top-left to bottom-right)
    for (let row = 0; row <= numRows - 4; row++) {
        for (let col = 0; col <= numCols - 4; col++) {
            const sequence = [grid[row][col], grid[row + 1][col + 1], grid[row + 2][col + 2], grid[row + 3][col + 3]].join('');
            if (sequence === 'XXXX' || sequence === 'OOOO') {
                return sequence[0];
            }
        }
    }

    // Check diagonally (from top-right to bottom-left)
    for (let row = 0; row <= numRows - 4; row++) {
        for (let col = numCols - 1; col >= 3; col--) {
            const sequence = [grid[row][col], grid[row + 1][col - 1], grid[row + 2][col - 2], grid[row + 3][col - 3]].join('');
            if (sequence === 'XXXX' || sequence === 'OOOO') {
                return sequence[0];
            }
        }
    }

    return null;
}