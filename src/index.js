import $ from "jquery";
import "./style.css";
import { populateInfo } from "./populateDOM";
import "./index.html";

window.onload = populateInfo;
$("#search").on("click", populateInfo);
if (module.hot) {
    module.hot.accept();
    module.hot.accept("./API-calls", function () {});
}
