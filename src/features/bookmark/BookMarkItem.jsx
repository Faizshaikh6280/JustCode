import { Link } from "react-router-dom";
import { useQuestion } from "../../context/QuestionContext";

function BookMarkItem({ question }) {
  const { currentQuestion, dispatch } = useQuestion();
  return (
    <li
      className={`${
        question.id === currentQuestion.id ? "border-light border-l-2" : ""
      } px-4 py-3 flex justify-between text-base`}
    >
      <Link to={`/questions/${question.id}`}>
        <h4 className="text-light hover:text-themeblue">
          {question.id}. {question.questionName}
        </h4>
      </Link>

      <button
        onClick={() =>
          dispatch({ type: "bookmark/remove", payload: question.id })
        }
        className={`text-xs text-light border-2 px-3 py-2 rounded-lg uppercase border-medium hover:bg-medium transition duration-300 hover:text-dark font-semibold `}
      >
        Remove
      </button>
    </li>
  );
}

export default BookMarkItem;
