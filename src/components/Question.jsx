import { useNavigate, useParams } from "react-router-dom";
import { useQuestion } from "../context/QuestionContext";
import { useEffect } from "react";

function Question() {
  const { getQuestion, isLoading, currentQuestion, bookmarks } = useQuestion();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(
    function () {
      getQuestion(id);
    },
    [id, getQuestion]
  );

  if (isLoading)
    return <p className="text-light text-center uppercase">Loading...</p>;

  return (
    <div className="text-light flex justify-center flex-col items-center">
      <button
        className="px-3 py-2 bg-transparent text-base  border-2 border-light inline-block mt-4 hover:border-themeblue transition duration-200"
        onClick={() => {
          navigate(-1);
        }}
      >
        &larr; Back to list
      </button>
    </div>
  );
}

export default Question;
