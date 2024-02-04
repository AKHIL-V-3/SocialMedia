import ReactDOM from "react-dom/client";
import { ActionIcon, ColorScheme, ColorSchemeProvider, MantineProvider, } from "@mantine/core"
import App from "./App";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { useLocalStorage } from '@mantine/hooks';
import store from "./lib/redux/hooks";
import { Provider } from "react-redux";



const Main = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  });

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const dark = colorScheme === "dark"
  const light = colorScheme === "light"

  return (

    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>

      <MantineProvider

        theme={{
          colorScheme,
          colors: {
            // override dark colors to change them for all components
            dark: ["#C1C2C5", "#A6A7AB", "#909296", "#5C5F66", "#373A40", "#2C2E33", "#25262B", "#101113", "#1A1B1E", "#141517"],
          },

        

        }}



        withGlobalStyles
        withNormalizeCSS
      >
        <>
          <ActionIcon
            variant='outline'
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title='Toggle color scheme'
          >
            {dark ? (<SunIcon style={{ width: 18, height: 18 }} />) : (<MoonIcon style={{ width: 18, height: 18 }} />)}
          </ActionIcon>
       
         <Provider store={store}>
          <App />
         </Provider>

        </>

      </MantineProvider>
    </ColorSchemeProvider>
  )
}




// ...(colorScheme === "dark" ?
// {

//   colors: {
//     // override dark colors to change them for all components
//     dark: ["#1A1B1E", "#C1C2C5", "#BAFF39"],
//   },
//   input: {
//     background: "#2C2E33", // Dark theme input background color
//   },
//   button: {
//     color: "#BAFF39", // Dark theme button color
//     background: "#373A40", // Dark theme button background color
//   },

// }
// :
// {

//   colors: {
//     // override dark colors to change them for all components
//     light: ["#FFFFFF", "#25262B", "#BAFF39"],
//   },
//   input: {
//     background: "#C1C2C5", // Light theme input background color
//   },
//   button: {
//     color: "#BAFF39", // Light theme button color
//     background: "#909296", // Light theme button background color
//   },

// }
// ) 

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />)
