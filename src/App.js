import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./css/main.min.css";

const Todo = lazy(() => import("./views/Todo"));
const Home = lazy(() => import("./views/homePage"));
const Error = lazy(() => import("./views/errorPage"));
const TodoSingle = lazy(() => import("./views/TodoSingle"));
const Photos = lazy(() => import("./views/Photos"));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo/:todoId" element={<TodoSingle />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;
