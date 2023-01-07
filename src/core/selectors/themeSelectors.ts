import { createSelector } from "@reduxjs/toolkit";
import { IState } from "../../types";

export const themeSelector = createSelector(
    (state :IState) => state.theme,
    theme => theme.theme
)