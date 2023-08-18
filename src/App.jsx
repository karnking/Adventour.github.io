import { ThemeProvider, createTheme as createMuiTheme } from "@mui/material"
import Allroutes from "./HomePage/Allroutes"
// import ScrollToTop from "react-scroll-to-top";
// import backtoTop from "./images/back-to-top.png"
export const muiTheme = createMuiTheme();

export const App = () => {

  return <div className="app">
    <ThemeProvider theme={muiTheme}>
      {/* <Navbar/> */}
    </ThemeProvider>
    <Allroutes/>
    {/* <ScrollToTop smooth top="20" component={<img src={backtoTop} alt='btt'></img>}/> */}
  </div>
}
