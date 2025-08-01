import { Provider } from "react-redux";
import Store from "./store/store";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routers";

function App() {
  return (
    <>
      <Provider store={Store}>
        <RouterProvider router={Router} />
      </Provider>
    </>
  );
}

export default App;
