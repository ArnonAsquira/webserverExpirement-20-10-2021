import style from "./styles.css";
import * as events from "./eventListeners";
import * as global from "./global-variables-for-index";

global.createAccountButton.addEventListener('click', events.createInputFieldsForSignUp);
global.createAccountButton.addEventListener('click', events.sendSignUpData);