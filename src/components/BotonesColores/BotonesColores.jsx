import { useDispatch, useSelector } from "react-redux";
import { setColor, setDarkMode } from "../../redux/slices/configurationSlice";
import "./style.css"
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";

export const BotonesColores = () => {
  const dispatch = useDispatch();
  const handleSelectorColor = (color) => {
    dispatch(setColor(color));
    setSelectedColor(color);
  };

  const darkMode = useSelector((state) => state.configuration.darkMode)
  const selectedColor = useSelector((state) => state.configuration.color)

  const handleDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };





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

      <li
        key='darkMode'
        value='darkMode'
        onClick={() => {
          handleDarkMode();
        }}
      >
        { darkMode 
          ? <LightMode sx={{ color: 'white' }} fontSize="large" />
          : <DarkMode sx={{ color: 'black' }} fontSize="large" /> 
        }
      </li>

     
    </ul>
  );
};
