import Vue from "vue"
import I from "ilocale"
import en from "./en"

export default function () {
  I.add(en);

  // extend I with useful function to set page title
  I.setTitle = function (key) {
    document.title = "DataEntry with Vue.js demo - " + I.t("titles." + key);
  }
}