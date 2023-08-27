import { createContext, useContext, useReducer, useCallback } from "react";
import { questions } from "../../Data/data";

const QuestionContext = createContext();
const initialBookmarks = localStorage.getItem("questions");

const initialState = {
  questions,
  bookmarks: initialBookmarks ? JSON.parse(initialBookmarks) : [],
  currentQuestion: {},
  isLoading: false,
  type: "all",
  difficulty: "mix",
};

function updateFilter(type, level) {
  if (type === "all" && level === "mix") {
    return questions;
  }
  if (type === "all" && level !== "mix") {
    return questions.filter((el) => el.difficulty === level);
  }
  if (type !== "all" && level === "mix") {
    return questions.filter((el) => el.type === type);
  }
  if (type !== "all" && level !== "mix") {
    return questions.filter(
      (el) => el.type === type && el.difficulty === level
    );
  }
}
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "question/loaded":
      const curQuestion = state.questions.find(
        (el) => el.id === Number(action.payload)
      );
      return {
        ...state,
        isLoading: false,
        currentQuestion: curQuestion,
      };

    case "filter/search":
      if (action.payload.length <= 0) {
        return {
          ...state,
          questions: updateFilter(state.type, state.difficulty),
        };
      }
      const data = questions.filter((el) =>
        el.questionName.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        questions: data,
        error: data.length === 0 ? "Search Match not fount try another 🙄" : "",
      };

    case "filter/type":
      return {
        ...state,
        type: action.payload,
        questions: updateFilter(action.payload, state.difficulty),
      };

    case "filter/difficulty":
      return {
        ...state,
        difficulty: action.payload,
        questions: updateFilter(state.type, action.payload),
      };

    case "bookmark/add":
      const isInBookmark = state.bookmarks.some(
        (el) => el.id === action.payload
      );
      const question = state.questions.find((el) => el.id === action.payload);
      const newData = isInBookmark
        ? [...state.bookmarks]
        : [...state.bookmarks, question];
      localStorage.setItem("questions", JSON.stringify(newData));
      return {
        ...state,
        bookmarks: newData,
        currentQuestion: {
          ...state.currentQuestion,
          bookmarked: true,
        },
        questions: state.questions.map((el) =>
          el.id === action.payload ? { ...el, bookmarked: true } : el
        ),
      };
    case "bookmark/remove":
      const newBook = state.bookmarks.filter((el) => el.id !== action.payload);
      localStorage.setItem("questions", JSON.stringify(newBook));
      return {
        ...state,
        bookmarks: newBook,
        questions: state.questions.map((el) =>
          el.id === action.payload ? { ...el, bookmarked: false } : el
        ),
        currentQuestion: {
          ...state.currentQuestion,
          bookmarked: false,
        },
      };

    default:
      throw new Error("Dispatched action not reconized");
  }
}

function QuestionProvider({ children }) {
  const [
    { questions, bookmarks, currentQuestion, isLoading, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  const getQuestion = useCallback(
    function (id) {
      if (Number(id) === currentQuestion.id) return;

      dispatch({ type: "loading" });

      setTimeout(function () {
        dispatch({ type: "question/loaded", payload: id });
      }, 0);
    },
    [currentQuestion.id]
  );

  return (
    <QuestionContext.Provider
      value={{
        questions,
        bookmarks,
        currentQuestion,
        isLoading,
        getQuestion,
        error,

        dispatch,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

function useQuestion() {
  const context = useContext(QuestionContext);
  if (context === undefined)
    throw new Error("Question Context is used outside of Question provider");
  return context;
}

export { QuestionProvider, useQuestion };
