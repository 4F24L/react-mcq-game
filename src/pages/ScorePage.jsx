import { useRecoilValue, useResetRecoilState } from "recoil";
import { scoreAtom, questionIndexAtom } from "../atoms/gameAtom";
import { useNavigate } from "react-router-dom";
import Nav from "../components/NavBar";

const ScoreScreen = () => {
  const score = useRecoilValue(scoreAtom);
  const resetScore = useResetRecoilState(scoreAtom);
  const resetIndex = useResetRecoilState(questionIndexAtom);

  const navigate = useNavigate();

  const handleRestart = () => {
    resetScore();
    resetIndex();
    navigate("/");
  };

  return (
    <>
      <Nav />
      <div className="flex justify-center flex-col p-6 border-2 mx-8 rounded-2xl mt-4 bg-gray-300">
        <h2 className=" text-3xl mb-10">Your Score: {score}</h2>
        <button className="place-self-center cursor-pointer border-2 border-purple-400 bg-lime-400 hover:bg-lime-300 rounded-xl px-3 py-1 text-center text-xl" onClick={handleRestart}>Play Again</button>
      </div>
    </>
  );
};

export default ScoreScreen;
