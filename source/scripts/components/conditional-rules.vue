<template>
  <div id="conditional-rules">
    <section>
      <h1>{{t("voc.ConditionalRules")}}</h1>
      <DataEntryForm ref="form" :schema="schema" :onFormat="handleValueChange">
        <div id="example-form" className="conditional-rules">
          <label for="light-side">Light side of the force:</label>
          <input id="light-side" type="radio" value="light" name="side" v-model="obj.side" /><br />
          <label for="dark-side">Dark side of the force:</label>
          <input id="dark-side" type="radio" value="dark" name="side" v-model="obj.side" /><br />
  
          <label for="fav-jedi">Favorite Jedi (required if you choose the Light side):</label>
          <input id="fav-jedi" type="text" name="fav-jedi" v-model="obj['fav-jedi']" /><br />
  
          <label for="fav-sith">Favorite Sith (required if you choose the Dark side):</label>
          <input id="fav-sith" type="text" name="fav-sith" v-model="obj['fav-sith']" /><br />
        </div>
        <hr />
        <button class="btn" v-on:click="validate">Validate</button> <em class="btn-note">{{message}}</em>
      </DataEntryForm>
    </section>
    <section>
      <h3>Preview of the value object, in state (handled by React):</h3>
      <pre v-html="preview"></pre>
    </section>
    <section>
      <h2>Please note:</h2>
      <ul>
        <li>How formatting on blur works</li>
        <li>How formatting on focus works</li>
      </ul>
    </section>
  </div>
</template>

<script>
import I from "ilocale"
import DataEntryForm from "./common/dataentry.vue"
import demoview from "./common/demoview"

const ConditionalRules = {
  created () {
    I.setTitle("ConditionalRules")
  },
  data () {
    return {
      obj: {
        side: "",
        "fav-jedi": "",
        "fav-sith": ""
      },
      message: "<-- click to validate everything!",
      schema: {
        "side": {
          validation: ["required"],
          trigger: ["fav-jedi", "fav-sith"] // validation of this field, triggers validation on the other two fields
        },
        "fav-jedi": {
          validation: function () {
            var side = this.getFieldValue("side");
            return side == "light" ? ["required"] : ["none"];
          }
        },
        "fav-sith": {
          validation: function () {
            var side = this.getFieldValue("side");
            return side == "dark" ? ["required"] : ["none"];
          }
        }
      }
    }
  },
  computed: {
    preview() {
      return JSON.stringify(this.obj, 0, 2)
    }
  },
  methods: {

  },
  components: {
    DataEntryForm
  }
}

demoview(ConditionalRules)

export default ConditionalRules;
</script>

<style lang="scss">
</style>
