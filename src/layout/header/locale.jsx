import { Dropdown } from "antd";
import useConfig from "@/utils/hooks/useConfig";
import { Icon } from "@/components";
import { useEffect, useState } from "react";

const Locale = () => {
  const { locale, onChangeLocale } = useConfig();
  const [language, setLanguage] = useState(locale);

  useEffect(() => {
    setLanguage(locale);
  }, [locale]);

  const handleListItemClick = (event) => {
    let lng = event.key;
    setLanguage(lng);
    onChangeLocale(lng);
  };

  // Locale dropdown list
  const items = [
    {
      label: "Urdu",
      key: "ur",
    },
    {
      type: "divider",
    },
    {
      label: "English",
      key: "en",
    },
  ];

  const menuProps = {
    items,
    onClick: handleListItemClick,
  };
  return (
    <Dropdown menu={menuProps} trigger={["click"]}>
      {language === "en" ? (
        <Icon
          className="hidden px-2 h-9 w-9 text-dark hover:opacity-70 dark:text-white cursor-pointer md:block"
          prefix="fas"
          name="language"
        />
      ) : (
        <div className="hidden justify-center items-center px-2 mx-2 h-5 w-9 rounded-md text-dark hover:opacity-70 dark:text-dark dark:bg-white cursor-pointer md:flex">
          <h5 className="self-center uppercase">{language}</h5>
        </div>
      )}
    </Dropdown>
  );
};

export default Locale;
