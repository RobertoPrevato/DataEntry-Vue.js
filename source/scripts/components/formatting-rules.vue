<template>
  <div id="formatting-rules">
    <section>
      <h1>{{t("voc.FormattingRules")}}</h1>
      <DataEntryForm ref="form" :schema="schema" :onFormat="handleValueChange">
        <div id="example-form">
          <label for="zero-field">Zero filled (10)</label>
          <input id="zero-field" type="text" name="a" maxLength="10" v-model="obj.a" /><br />
  
          <label for="zero-field-1">Zero filled (5)</label>
          <input id="zero-field-1" type="text" name="b" maxLength="5" v-model="obj.b" /><br />
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

const FormattingRules = {
  created () {
    I.setTitle("FormattingRules")
  },
  data () {
    return {
      obj: {
        a: "",
        b: ""
      },
      message: "<-- click to validate everything!",
      schema: {
        a: {
          validation: ["required"],
          format: ["zero-fill"],
          preformat: ["zero-unfill"]
        },
        b: {
          validation: ["required"],
          format: ["zero-fill"],
          preformat: ["zero-unfill"]
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

demoview(FormattingRules)

export default FormattingRules;
</script>

<style lang="scss">
</style>
