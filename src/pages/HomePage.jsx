import { useResetRecoilState } from "recoil";
import {
  questionIndexAtom,
  scoreAtom,
  selectedOptionAtom,
} from "../atoms/gameAtom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/NavBar";

const HomePage = () => {
  const resetScore = useResetRecoilState(scoreAtom);
  const resetIndex = useResetRecoilState(questionIndexAtom);
  const resetSelected = useResetRecoilState(selectedOptionAtom);

  useEffect(() => {
    resetScore();
    resetIndex();
    resetSelected();
  }, []);

  return (
    <>
      <Nav />
      <div className=" flex flex-col items-center justify-center h-[89vh]">
        <h1 className=" text-3xl sm:text-4xl font-light mb-9">Test Your Knowledge,{<span className="sm:hidden"><br/></span>} One Question at a Time!</h1>
        <Link to="/game" className=" my-6 ">
          <button className="cursor-pointer rounded-2xl text-lg bg-purple-200 hover:bg-purple-500 hover:font-medium hover:text-white px-3 py-2 border-2 border-lime-500 hover:border-lime-600 transition-transform duration-600">Start Game</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
