import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Home";
import AppLayout from "./Pages/AppLayout";
import QuestionBar from "./features/question/QuestionBar";
import Bookmark from "./features/bookmark/BookmarkList";
import Login from "./Pages/Login";
import { QuestionProvider } from "./context/QuestionContext";
import Question from "./components/Question";
function App() {
  return (
    <QuestionProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="questions" />} />
            <Route path="questions" element={<QuestionBar />} />
            <Route path="questions/:id" element={<Question />} />
            <Route path="bookmark" element={<Bookmark />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QuestionProvider>
  );
}

export default App;
