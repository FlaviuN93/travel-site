import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";

let mobileMenu = new MobileMenu();

mobileMenu;
if (module.hot) {
  module.hot.accept();
}
