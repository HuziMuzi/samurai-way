import {DefaultTheme} from "./defaultTheme";

type CustomTheme = typeof DefaultTheme;

declare module "styled-components" {
    export interface DefaultThemeType extends CustomTheme {}
}
