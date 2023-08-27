import { useState } from "react";
import { useQuestion } from "../../context/QuestionContext";

function Search({ placeholder }) {
  const { dispatch } = useQuestion();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "filter/search", payload: query });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        className="px-3 py-2 bg-transparent border-2 w-48 border-white rounded-full transition-all duration-3000 focus:outline-none  text-white placeholder:text-white/70 focus:w-60"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default Search;
