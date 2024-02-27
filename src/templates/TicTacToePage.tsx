import TicTacToeBoard from "@/components/TicTacToeBoard";
import Link from "next/link";

const TicTacToePage = () => {

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1>TIC TAC TOE GAME</h1>

            <TicTacToeBoard />            

            <Link href="/fourInARow" className="my-4 text-blue-500 text-xl hover:underline">
                Go to Four In A Row Game!
            </Link>

        </div>
    );
};
export default TicTacToePage;