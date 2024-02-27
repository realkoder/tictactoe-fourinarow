"use client"

import { generateBoardGrid } from "@/utilities/BoardGridFunctions";
import { useState } from "react";

type TicTacToeBoardProps = {
}

const TicTacToeBoard = ({ }: TicTacToeBoardProps) => {
    const [boardGrid, setBoardGrid] = useState(generateBoardGrid(3, 3));
    const [isPlayerX, setIsPlayerX] = useState(false);

    const handleCellClick = (col: number, row: number) => {
        setBoardGrid(prevGrid => {
            const newBoardGrid = [...prevGrid];
            newBoardGrid[col] = [...newBoardGrid[col]]
            newBoardGrid[col][row] = isPlayerX ? "X" : "O";
            return newBoardGrid;
        });

        setIsPlayerX(cur => !cur);
    } 

    const handleMoveWinner = () => {

    }

    return (
        <div className="m-8">
            <h2 className="">It is player {isPlayerX ? "X" : "O"} turn!</h2>

            <hr className="my-4 border-t border-gray-400"></hr>

            <div className="grid grid-cols-3 gap-2">
                {boardGrid.map((col, index) => (
                    <div key={index}>
                        {col.map((cell, cellIndex) => (
                            <div
                                key={cellIndex}
                                className="border border-gray-400 rounded-md flex items-center justify-center h-20 w-20 my-2 cursor-pointer text-6xl font-bold transition duration-300 ease-in-out transform hover:scale-105"
                                onClick={() => handleCellClick(index, cellIndex)}>{cell}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TicTacToeBoard;