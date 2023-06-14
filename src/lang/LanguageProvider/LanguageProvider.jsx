import { IntlProvider } from "react-intl";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { messages } from "../messages";

export const LanguageProvider = ({ children }) => {
  const language =
    useAppSelector((state) => state.configuration.language) ||
    localStorage.getItem("selectedLang");

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      {children}
    </IntlProvider>
  );
};
