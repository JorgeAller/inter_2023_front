import { useDispatch } from "react-redux";
import { setColor } from "../../redux/slices/configurationSlice";
import "./style.css"
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";

export const BotonesColores = () => {
  const dispatch = useDispatch();
  const handleSelectorColor = (color) => {
    dispatch(setColor(color));
    setSelectedColor(color);
  };

  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem("selectedColor")
  );

  return (
    <ul className="botonesColores">
      <li
        key='var(--color2)'
        value='var(--color2)'
        onClick={() => {
          handleSelectorColor('var(--color2)');
        }}
      >
        <CircleIcon sx={{ color: 'var(--color2)' }} fontSize="large" />
      </li>

      <li
        key='var(--color1)'
        value='var(--color1)'
        onClick={() => {
          handleSelectorColor('var(--color1)');
        }}
      >
        <CircleIcon sx={{ color: 'var(--color1)' }} fontSize="large" />
      </li>

      <li
        key='var(--color3)'
        value='var(--color3)'
        onClick={() => {
          handleSelectorColor('var(--color3)');
        }}
      >
        <CircleIcon sx={{ color: 'var(--color3)' }} fontSize="large" />
      </li>
    </ul>
  );
};
