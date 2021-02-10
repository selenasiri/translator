import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next'


function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}>
        <button onClick={()=> handleClick('en')}>
          English
        </button>
        <button onClick={()=> handleClick('ko')}>
          Korean
        </button>
        <button onClick={()=> handleClick('chi')}>
          Chinese
        </button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('Thanks.1')} </p>
        <p>{t('Why.1')} </p>
        

      </header>
    </div>
  );
}

export default App;
