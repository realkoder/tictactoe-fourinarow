"use client"

import { checkFourInRow, checkThreeInRow, generateBoardGrid } from "@/utilities/BoardGridFunctions";
import { useEffect, useState } from "react";
import ModalBox from "./ModalBox";

type TicTacToeBoardProps = {
}

const TicTacToeBoard = ({ }: TicTacToeBoardProps) => {
    const [boardGrid, setBoardGrid] = useState(generateBoardGrid(3, 3));
    const [isPlayerX, setIsPlayerX] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [winner, setWinner] = useState("");

    const handleCellClick = (col: number, row: number) => {
        setBoardGrid(prevGrid => {
            const newBoardGrid = [...prevGrid];
            newBoardGrid[col] = [...newBoardGrid[col]]
            newBoardGrid[col][row] = isPlayerX ? "X" : "O";
            return newBoardGrid;
        });

        setIsPlayerX(cur => !cur);
    }

    useEffect(() => {
        if (!boardGrid) return;

        const winningPLayer = checkThreeInRow(boardGrid);
        if (winningPLayer === "O") {
            setWinner(winningPLayer);
            setIsModalOpen(true);
        } else if (winningPLayer === "X") {
            setWinner(winningPLayer);
            setIsModalOpen(true);
        }
    }, [boardGrid]);

    const onClose = () => {
        setIsModalOpen(false);
        setBoardGrid(generateBoardGrid(3, 3));
        setWinner("");
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

            <div>
                <ModalBox isOpen={isModalOpen} onClose={onClose}>
                    <p>The winner is {winner}!</p>
                </ModalBox>
            </div>

        </div>
    );
};
export default TicTacToeBoard;