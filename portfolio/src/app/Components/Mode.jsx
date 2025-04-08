"use client";

import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../ReduxToolkit/ThemeSlice";

export const ThemeMode = () => {
  const dispatch = useDispatch();
  const { themeStatus } = useSelector((theme) => theme.theme.themeStatus);

  // Handle CHange Theme
  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <>
      <input type="checkbox" id="theme-mode" className="hidden" />
      <label
        htmlFor="theme-mode"
        className={`theme-button relative w-[80px] h-[25px] rounded-s-[50px] rounded-e-[50px] border-2 border-[#ccc] flex items-center cursor-pointer ${
          themeStatus ? "justify-start" : "justify-end"
        }`}
        onClick={handleChangeTheme}
      ></label>
    </>
  );
};
