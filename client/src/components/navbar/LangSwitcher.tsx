import * as React from 'react';
import { connect } from 'react-redux';
import 'primeicons/primeicons.css';
import { useTranslation } from "react-i18next";
import { Languages } from './types';

const initLanguageItems = [
  { short: Languages.en, full:'english', current: true },
  { short: Languages.fr, full:'français', current: false },
  { short: Languages.de, full:'deutsche', current: false }
]

export const LangSwitcher: React.FC<{}> = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [showLangOptions, toggleLangOptions] = React.useState(false);
  const [languageSelectItems, switchStateLanguage] = React.useState(initLanguageItems);

  const toggeleOptionsList = (): void => {
    toggleLangOptions(!showLangOptions)
  }

  const changeLanguage = (switchedLanguage: Languages): void => {
    switchStateLanguage(languageSelectItems.map(language => {
        language.current = language.short === switchedLanguage ? true : false

        return language
      })
    )

    i18n.changeLanguage(switchedLanguage)
    toggleLangOptions(!showLangOptions)
  }

  return (
    <div className="lang-dropdown">
      <button className='toggeleLang' onClick={toggeleOptionsList}>
        {t("shortLangName")}
        {showLangOptions ? <i className="pi pi-angle-up p-mr-2"></i> : <i className="pi pi-angle-down p-mr-2"></i> }
      </button>
      {showLangOptions ? 
        <div className="lang-dropdown-options">
          {languageSelectItems.map((lang, index) => {
            return <div className="option" onClick={() => changeLanguage(lang.short)} key={index}>
            <span className="icon">{lang.current ? <i className="pi pi-check p-mr-2"></i> : ''}</span>
            <span className="text" data-index={index}>{lang.full}</span>
          </div>})}
      </div> : ''}
    </div>
  )
}

export default connect()(LangSwitcher)