import { useQuestion } from "../context/QuestionContext";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const { questions, error } = useQuestion();
  if (error && questions.length <= 0)
    return <p className="text-lg text-light text-center mt-4">{error}</p>;
  return (
    <>
      <ul className="questionList mt-6 overflow-auto">
        {questions.map((question, indx) => (
          <QuestionItem question={question} key={question.id} indx={indx} />
        ))}
      </ul>
      <p className="text-light text-right mt-2">
        Total Results : <span className="font-bold">{questions.length}</span>
      </p>
    </>
  );
}

export default QuestionList;
