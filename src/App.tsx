import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import State from "./pages/State";
import Effect from "./pages/Effect";
import Context from "./pages/Context";
import Ref from "./pages/Ref";
import LayoutEffect from "./pages/LayoutEffect";
import Imperative from "./pages/Imperative";
import Memo from "./pages/Memo";
import Reducer from "./pages/Reducer";
import DebugValue from "./pages/DebugValue";
import Header from "./components/Header";
import Callback from "./pages/Callback";
// import pgLocation from "./utils/ImportAllPages";
import { useEffect, useState } from "react";

const routes = [
  { path: "/", exact: true, element: Home },
  { path: "/useState", element: State },
  { path: "/useEffect", element: Effect },
  { path: "/useContext", element: Context },
  { path: "/useRef", element: Ref },
  { path: "/useReducer", element: Reducer },
  { path: "/useMemo", element: Memo },
  { path: "/useImperative", element: Imperative },
  { path: "/useLayoutEffect", element: LayoutEffect },
  { path: "/useDebugValue", element: DebugValue },
  { path: "/useCallback", element: Callback },
];
function App() {
  return (
    <>
      <Header />
      <div
        style={{
          position: "relative",
          top: 0,
          display: "flex",
          gap: "2em",
          justifyItems: "center",
        }}
      >
        {routes.map((route, index) => (
          <NavLink key={index} to={route.path}>
            {route.element.name}
          </NavLink>
        ))}
      </div>
      <ScriptPageLocation />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </>
  );
}

export default App;

const ScriptPageLocation = () => {
  const location = useLocation();
  const [page, setPage] = useState("");

  useEffect(() => {
    const route = routes.find((route) => route.path === location.pathname);
    setPage(route ? route.element.name : "");
  }, [location]);

  return (
    <>
      {page.length && (
        <p>
          Edit <code>src/pages/{page}.tsx</code> and save to test HMR
        </p>
      )}
    </>
  );
};
