import Search from "./Search";
import QuestionList from "../../components/QuestionsList";
import { useQuestion } from "../../context/QuestionContext";
function QuestionBar() {
  const { dispatch } = useQuestion();

  return (
    <>
      <div className="flex items-center gap-5 mt-3 ">
        <Search placeholder={"Search questions..."} />
        <div className="ml-auto">
          <label htmlFor="topic" className="text-light mr-2 ">
            Choose topic
          </label>
          <select
            name="topic"
            id="topic"
            onChange={(e) => {
              dispatch({ type: "filter/type", payload: e.target.value });
            }}
          >
            <option value="all">All</option>
            <option value="array">Array</option>
            <option value="sorting">Sorting</option>
            <option value="searching">Searching</option>
            <option value="recursion">Recursion</option>
            <option value="stack">Stack</option>
            <option value="queue">Queue</option>
            <option value="binarytress">Binary Trees</option>
            <option value="linkedlist">Linked list</option>
          </select>
        </div>

        <div>
          <label htmlFor="difficulty" className="text-light mr-2 ">
            Difficulty
          </label>
          <select
            name="difficulty"
            id="difficulty"
            onChange={(e) => {
              console.log(e.target.value);
              dispatch({ type: "filter/difficulty", payload: e.target.value });
            }}
          >
            <option value="mix">Mix</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
      <div>
        <QuestionList />
      </div>
    </>
  );
}

export default QuestionBar;
