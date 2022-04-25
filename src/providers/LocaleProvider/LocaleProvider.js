import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import English from "../../locales/en_US.json";
import French from "../../locales/fr_FR.json";
const message = {
  en: English,
  fr: French
};

const LocaleProvider = ({ children }) => {
  const language = useSelector(state => state && state.language ? state.language : "en");
  return (
    <IntlProvider locale={language} messages={message[language]}>
      {children}
    </IntlProvider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.element])
};
export default LocaleProvider;
