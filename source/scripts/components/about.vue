<template>
  <div id="about-region">
    <h1>{{t("voc.About")}}</h1>
    <p>{{t("voc.AboutText")}}</p>
    <p>{{t("voc.SourceCode")}} <a href="https://github.com/RobertoPrevato/DataEntry-Vue.js">https://github.com/RobertoPrevato/DataEntry-Vue.js</a></p>
    <p>{{t("voc.AppVersion")}}</p>
    <hr />
    <section>
      <h2>{{t("voc.DesignNote")}}</h2>
      <p>{{t("voc.AboutDesign")}}</p>
      <img src="https://raw.githubusercontent.com/RobertoPrevato/DataEntry/master/docs/renders/design-preferences.svg?sanitize=true" alt="Design preferences" width="594" height="322" />
    </section>
    <hr />
    <section>
      <h2>{{t("voc.UsefulLinks")}}</h2>
      <ul>
        <li><a href="https://vuejs.org">Vue.js framework</a></li>
        <li><a href="https://github.com/RobertoPrevato/DataEntry">DataEntry forms validation library</a></li>
        <li><a href="https://github.com/RobertoPrevato/DataEntry-Vue.js">Source code of this demo</a></li>
        <li><a href="https://github.com/RobertoPrevato/I.js">client side localization with I.js</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
import I from "ilocale"

export default {
  created () {
    I.setTitle("About")
  }
}
</script>

<style lang="scss">
</style>
