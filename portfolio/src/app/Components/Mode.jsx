"use client";

import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../ReduxToolkit/ThemeSlice";

export const ThemeMode = () => {
  const dispatch = useDispatch();
  const themeStatus = useSelector((theme) => theme.theme.themeStatus);

  // Handle Change Theme
  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <>
      <input
        type="checkbox"
        id="theme-mode"
        className="hidden"
        checked={themeStatus}
        onChange={handleChangeTheme} // Added onChange handler
      />
      <label
        htmlFor="theme-mode"
        className={`theme-button relative w-[60px] h-[25px] rounded-s-[50px] rounded-e-[50px] border-2  flex items-center cursor-pointer transition-all duration-300  ${
          themeStatus
            ? "justify-end bg-[some-light-color] border-[#ccc]"
            : "justify-start bg-[some-dark-color] border-[#ccc]"
        } ${themeStatus ? "bg-white" : "bg-black"}`}
      >
        <span
          className={`absolute w-[35px] h-[23px] bg-white rounded-full border-2 ${
            themeStatus ? "border-[#000]" : "border-[#ccc]"
          }`}
        ></span>
      </label>
    </>
  );
};
