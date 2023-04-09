//este archivo es js y no jsx porque no voy a regresar un fucntional component
//voy a regresar un objeto de js

import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme=createTheme({
    palette:{
        primary:{
            main:'#262254'
        },
        secondary:{
            main:'#543884'
        },
        error:{
            main: red.A400
        }
    }
})