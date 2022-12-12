import React from 'react';
import { useLang } from '../contexts/LangContext';

function ChangeLang() {
    const {lang,setLang} = useLang();
  return (
    <div>
        <div>
            <div>Aktif Dil:{lang}</div>
            <button onClick={()=>setLang("TR")}>TR</button>
            <button onClick={()=>setLang("EN")}>ENG</button>
            <button onClick={()=>setLang("DE")}>DE</button>
        </div>
    </div>
  );
};

export default ChangeLang;