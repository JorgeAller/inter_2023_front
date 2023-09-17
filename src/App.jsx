import { LanguageProvider } from "./lang/LanguageProvider/LanguageProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

export const BASIC_URL = import.meta.env.VITE_PUBLIC_URL;
export const BASE_URL_BBDD = import.meta.env.VITE_BASE_URL

export const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
