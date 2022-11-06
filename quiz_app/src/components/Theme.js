import React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const themeLight = createTheme({
   palette: {
    mode: 'light',
    primary: {
        main: '#c2185b',
      },
  }
}
);

export const themeDark = createTheme({
       palette: {
        mode: 'dark',
        primary: {
            main: '#c2185b',
          },
      }
    }
    );
  export const Theme = (props) => {
    const {children, darkMode} = props;

    const defaultTheme = darkMode ? themeDark : themeLight;
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  }

    export const withTheme = (Component) => {

    return (props) => {
      const [darkMode, setState] = useState(false);
        return (
            <Theme darkMode={darkMode}>
                <Component {...props} darkMode={darkMode} setState={setState}/>
            </Theme>
        )
    }
  }

