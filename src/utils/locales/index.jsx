import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// third-party
import { IntlProvider } from "react-intl";
import useConfig from "../hooks/useConfig";

// load locales files
const loadLocaleData = (locale) => {
  switch (locale) {
    case "ur":
      return import("./urdu.json");
    default:
      return import("./en.json");
  }
};

// ==============================|| LOCALIZATION ||============================== //

const Locales = ({ children }) => {
  const { locale } = useConfig();
  const [messages, setMessages] = useState();

  useEffect(() => {
    loadLocaleData(locale).then((d) => {
      setMessages(d.default);
    });
  }, [locale]);

  return (
    <>
      {messages && (
        <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
          {children}
        </IntlProvider>
      )}
    </>
  );
};

Locales.propTypes = {
  children: PropTypes.node,
};

export default Locales;
