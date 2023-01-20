import {DefaultThemeType} from "styled-components";

export const DefaultTheme : DefaultThemeType = {
    colors: {
        primary: '#adaae3',
        primaryBlock: '#d6ddff',
        text: '#5679d2',
        textOnPrimary: "#434362",
        paginationMain: "#314272",
        white : "#ffffff",
        border: '#e4e8fc',
        severity: {
            error: '#E96B6B',
            success: "#74b460",
            notification: "#608ab4",
        },
    }
} as const
