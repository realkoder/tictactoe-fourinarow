"use client"

import { checkFourInRow, generateBoardGrid } from "@/utilities/BoardGridFunctions";
import { useEffect, useState } from "react";
import ModalBox from "./ModalBox";

type FourInARowBoardProps = {
}

const FourInARowBoard = ({ }: FourInARowBoardProps) => {
    const [boardGrid, setBoardGrid] = useState(generateBoardGrid(7, 7));
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

    // Listens for boardgrid changes - everytime a player makes a move board will be scanned for four in a row match
    useEffect(() => {
        const winningPLayer = checkFourInRow(boardGrid);
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
        setBoardGrid(generateBoardGrid(7, 7));
        setWinner("");
    }

    return (
        <div className="m-8">
            <h2 className="">It is player {isPlayerX ? "X" : "O"} turn!</h2>

            <hr className="my-4 border-t border-gray-400"></hr>

            <div className="grid grid-cols-7 gap-2">
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
export default FourInARowBoard;