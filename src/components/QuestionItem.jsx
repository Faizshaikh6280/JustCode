import { Link } from "react-router-dom";
import { useQuestion } from "../context/QuestionContext";

function QuestionItem({ question, indx }) {
  const { currentQuestion } = useQuestion();
  const { id, difficulty } = question;
  return (
    <li
      className={`${
        currentQuestion.id === id ? "border-light border-l-2" : ""
      } px-4 py-3 flex justify-between text-base`}
    >
      <Link to={`${id}`}>
        <h4 className="text-light hover:text-themeblue">
          {question.id}. {question.questionName}
        </h4>
      </Link>
      <p
        className={`capitalize ${
          difficulty === "easy"
            ? "text-easy"
            : difficulty === "medium"
            ? "text-medium"
            : "text-hard"
        }`}
      >
        {question.difficulty}
      </p>
    </li>
  );
}

export default QuestionItem;
