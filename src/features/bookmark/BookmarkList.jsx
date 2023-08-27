import { useQuestion } from "../../context/QuestionContext";
import BookMarkItem from "./BookMarkItem";
function BookmarkList() {
  const { bookmarks } = useQuestion();
  if (bookmarks.length <= 0) {
    return (
      <p className="text-lg text-light text-center capitalize">
        I'm empty :) start bookmarking to see something in me 😀
      </p>
    );
  }

  return (
    <ul className="questionList">
      {bookmarks.map((el) => (
        <BookMarkItem question={el} key={el.id} />
      ))}
    </ul>
  );
}

export default BookmarkList;
