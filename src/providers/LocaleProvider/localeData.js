import { addLocaleData } from "react-intl";
import english from "react-intl/locale-data/en";

// addLocaleData(english);

// const possibleLocale = navigator.language.split("-")[0] || "en";
addLocaleData(require(`react-intl/locale-data/${english}`));
