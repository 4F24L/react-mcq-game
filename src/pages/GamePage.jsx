import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import {
  questionIndexAtom,
  scoreAtom,
  selectedOptionAtom,
} from "../atoms/gameAtom";
import questions from "../db/questions";
import Nav from "../components/NavBar";

const GamePage = () => {
  const [current, setCurrent] = useRecoilState(questionIndexAtom);
  const [score, setScore] = useRecoilState(scoreAtom);
  const [selected, setSelected] = useRecoilState(selectedOptionAtom);

  const navigate = useNavigate();

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/score");
    }
  };

  return (
    <>
    <Nav/>
      <div className=" flex justify-center flex-col p-6 border-2 mx-8 rounded-2xl mt-4 bg-gray-300" >
        <h2 className=" text-3xl sm:text-4xl mb-5">
          Q{current + 1}: {questions[current].question}
        </h2>

        <ul className=" text-2xl p-4">
          {questions[current].options.map((option) => (
            <li
              key={option}
              onClick={() => setSelected(option)}
              className={` list-decimal border-2 border-gray-600 rounded-xl mb-3 px-3 py-1 sm:w-2/5 cursor-pointer ${selected === option ? "border-lime-600 bg-lime-100" : ""}`}
            >
              {option}
            </li>
          ))}
        </ul>
        <button className=" place-self-center cursor-pointer border-2 border-purple-400 bg-lime-400 hover:bg-lime-300 rounded-xl w-24 text-center text-xl" onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default GamePage;
