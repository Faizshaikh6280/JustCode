import { useQuestion } from "../context/QuestionContext";

function CodeScreen() {
  const { currentQuestion, dispatch, bookmarks, isLoading } = useQuestion();

  const isCurrentInBookmark = bookmarks.some(
    (el) => el.id === currentQuestion.id
  );

  if (isCurrentInBookmark) {
    currentQuestion.bookmarked = true;
  }

  return (
    <div className="grow relative bg-lightDark">
      {currentQuestion.id ? (
        <>
          <div className="h-[75vh] overflow-auto text-light px-8 py-5 relative">
            <h1 className="text-xl font-semibold mb-2 max-w-[80%]">
              <span>Ques </span>
              {currentQuestion.id}. {currentQuestion.questionName}
            </h1>
            <pre className="border-t pt-1 mt-5">
              <p className="capitalize mb-1 text-white/60">
                {currentQuestion.type}.c
              </p>
              <h2 className="text-medium">
                <span className="text-hard">#include</span> {"<stdio.h>"}
              </h2>
              <h2 className="text-medium">
                <span className="text-hard">#include</span> {"<conio.h>"}
              </h2>
              {currentQuestion.code}
            </pre>
            <button
              onClick={() =>
                dispatch({ type: "bookmark/add", payload: currentQuestion.id })
              }
              className={`absolute text-xs right-4 top-4 border-2 px-3 py-2 rounded-lg uppercase border-medium hover:bg-medium transition duration-300 hover:text-dark font-semibold ${
                currentQuestion.bookmarked ? "bg-medium text-dark" : ""
              }`}
            >
              {currentQuestion.bookmarked ? "Bookmarked" : "Add to bookmarks"}
            </button>
          </div>
          <div className="h-[25vh] bg-lightDark overflow-auto  bottom-0 border-t-[8px] transition duration-300 text-light border-dark hover:border-themeblue w-full">
            <h1 className="text-base font-semibold uppercase my-2 px-3">
              Output 👇
            </h1>
            <pre className="px-3">{currentQuestion.output}</pre>
          </div>
        </>
      ) : (
        <p className="text-light text-3xl text-center relative top-[50%]">
          Start Looking at Answers 😉
        </p>
      )}
    </div>
  );
}

export default CodeScreen;
