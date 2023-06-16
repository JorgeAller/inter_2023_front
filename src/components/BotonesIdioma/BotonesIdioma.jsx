import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/slices/configurationSlice";

export const BotonesIdioma = ({selectedLanguage, setSelectedLanguage}) => {

    const dispatch = useDispatch();
    const handleSelectorLanguage = (language) => {
        dispatch(setLanguage(language));
        setSelectedLanguage(language);
      };

    return ( 

        <ul className="idioma">
          <li
            className={`${
                selectedLanguage === "gl"
                ? "idiomaButtonSelected"
                : "idiomaButton"
            }`}
            key="gl"
            value="gl"
            onClick={() => {
                handleSelectorLanguage("gl");
            }}
            >
            gl
          </li>
          <li
            className={`${
                selectedLanguage === "en"
                ? "idiomaButtonSelected"
                : "idiomaButton"
            }`}
            key="en"
            value="en"
            onClick={() => {
                handleSelectorLanguage("en");
            }}
            >
            en
          </li>
          <li
            className={`${
                selectedLanguage === "es-ES"
                ? "idiomaButtonSelected"
                : "idiomaButton"
            }`}
            key="es-ES"
            value="es-ES"
            onClick={() => {
                handleSelectorLanguage("es-ES");
            }}
            >
            es
          </li>
        </ul>
    )
}