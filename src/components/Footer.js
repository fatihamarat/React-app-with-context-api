import React from 'react';
import {useTheme} from '../contexts/ThemeContext';
import { useLang } from '../contexts/LangContext';

function Footer() {
    const {theme,toggleTheme} = useTheme();
    const {lang,setLang} = useLang();
  return (
    <div>
        <hr/>
        <h2>Footer</h2>
        <div>Aktif Tema:{theme}</div>
        <button onClick={toggleTheme}>Change Theme</button>
        <div className='change-lang'>
        <br/>
          <h3>Dili Değiştir</h3>
        </div>
        <div>Aktif Dil:{lang}</div>
            <button onClick={()=>setLang("TR")}>TR</button>
            <button onClick={()=>setLang("EN")}>ENG</button>
            <button onClick={()=>setLang("DE")}>DE</button>

    </div>
  )
}

export default Footer;