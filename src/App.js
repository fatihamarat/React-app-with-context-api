import "./Styles.css";
import Container from "./Container";
import { LangContextProvider } from "./contexts/LangContext";
import {ThemeContextProvider} from './contexts/ThemeContext';

function App() {
  return (
    <LangContextProvider>
    <ThemeContextProvider>
     <Container/>
    </ThemeContextProvider>
    </LangContextProvider>
  
  );
};

export default App;
