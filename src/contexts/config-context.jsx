import PropTypes from "prop-types";
import { createContext } from "react";

// project import
import { config as defaultConfig } from "@/utils";
import useLocalStorage from "@/utils/hooks/useLocalStorage";

// initial state
const initialState = {
  ...defaultConfig,
  onChangeTheme: () => {},
  onChangeLocale: () => {},
  onChangeFontFamily: () => {},
  onChangeToken: () => {},
  onReset: () => {},
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
  const [config, setConfig] = useLocalStorage("store-config", {
    fontFamily: initialState.fontFamily,
    theme: initialState.theme,
    locale: initialState.locale,
    token: initialState.token,
  });

  const onChangeTheme = (theme) => {
    setConfig({
      ...config,
      theme,
    });
  };

  const onChangeLocale = (locale) => {
    setConfig({
      ...config,
      locale,
    });
  };

  const onChangeFontFamily = (fontFamily) => {
    setConfig({
      ...config,
      fontFamily,
    });
  };

  const onChangeToken = (token) => {
    setConfig({
      ...config,
      token,
    });
  };

  const onReset = () => {
    setConfig({ ...defaultConfig });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeTheme,
        onChangeLocale,
        onChangeFontFamily,
        onChangeToken,
        onReset,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

ConfigProvider.propTypes = {
  children: PropTypes.node,
};

export { ConfigProvider, ConfigContext };
