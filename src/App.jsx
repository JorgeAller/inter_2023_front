import { LanguageProvider } from "./lang/LanguageProvider/LanguageProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";

export const BASIC_URL = import.meta.env.VITE_PUBLIC_URL;

export const App = () => {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </Provider>
  );
};

export default App;
