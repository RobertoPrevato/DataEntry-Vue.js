<template>
  <div id="dashboard">
    <section>
      <h1>{{t("voc.FormExample")}}</h1>
      <DataEntryForm ref="form" :schema="schema" :onFormat="handleValueChange">
        <div id="example-form" class="dashboard">
          <label for="username-field">Username</label>
          <input id="username-field" type="text" name="username" v-model="obj.username" /><br />
          <label for="year-field">Year (between 1900 and 2015)</label>
          <input id="year-field" type="text" name="year" v-model="obj.year" number/>
          <br />
          <label for="example-field">A field that is not required, but accepts only letters</label>
          <input id="example-field" type="text" name="only-letters" v-model="obj['only-letters']" /><br />
          <label for="favored-food-select">Favored food:</label>
          <select id="favored-food-select" name="favored-food" v-model="obj['favored-food']" >
            <option></option>
            <optgroup label="Salty">
              <option value="pizza">Pizza</option>
              <option value="noodles">Noodles</option>
              <option value="asado">Asado</option>
              <option value="sushi">Sushi</option>
            </optgroup>
            <optgroup label="Sweets">
              <option value="cheese-cake">Cheese cake</option>
              <option value="chocolate">Chocolate</option>
              <option value="marmalade">Marmalade</option>
            </optgroup>
          </select><br />
          <label for="light-side-radio">Light side of the force:</label>
          <input id="light-side-radio" type="radio" value="light" name="force-side" v-model="obj['force-side']" /><br />
          <label for="dark-side-radio">Dark side of the force:</label>
          <input id="dark-side-radio" type="radio" value="dark" name="force-side" v-model="obj['force-side']" /><br />
          <label for="policy-read-check" class="inline">A checkbox that must be checked (policy acceptance)</label>
          <input id="policy-read-check" type="checkbox" name="policy-read" v-model="obj['policy-read']" /><br />
        </div>
        <hr />
        <button class="btn" v-on:click="validate">Validate</button> <em class="btn-note">{{message}}</em>
      </DataEntryForm>
    </section>
    <hr />
    <section>
      <h3>Preview of the value object, in state (handled by Vue.js):</h3>
      <pre v-html="preview"></pre>
    </section>
    <section>
      <h2>Please note:</h2>
      <ul>
        <li>Vue.js is taking care of binding HTML elements' values to the object in memory - it is used normally</li>
        <li>DataEntry is taking care of validating the values by <em>schema</em> and by elements <em>name</em> property</li>
        <li>Formatting is applied only to valid values: try to input <strong>"&nbsp;&nbsp;&nbsp;Hello&nbsp;&nbsp;&nbsp;&nbsp;World&nbsp;&nbsp;&nbsp;"</strong> in the username field</li>
        <li>After formatting (done by DataEntry), the state of the parent view is updated using an event handler</li>
        <li>How validation is automatically fired on blur, so the state of blurred input element change accordingly to its new value</li>
        <li>How the year field is automatically formatted to remove leading zeros ("001900" -> "1900") - <em>implicit formatting by rule 'integer'</em></li>
        <li>How the username field is automatically formatted to clean spaces ("   Hello   World! " -> "Hello World!") - <em>explicit formatting with rule 'cleanSpaces'</em></li>
        <li>How the year field prevents user from inserting letters typing - <em>implicit constraint by rule 'integer'</em></li>
        <li>How error messages can be specified for each field rule in the schema object</li>
        <li>When clicking "Validate" button, the first invalid field is automatically focused</li>
        <li>Open the browser console to see the object returned by DataEntry.validate function.</li>
        <li>See the demo source code: the instance of dataentry is disposed inside `beforeDestroy` Vue.js component function. Event handlers are removed here.</li>
      </ul>
    </section>
  </div>
</template>

<script>
import I from "ilocale"
import DataEntryForm from "./common/dataentry.vue"
import demoview from "./common/demoview"

const Dashboard = {
  name: 'Dashboard',
  created () {
    I.setTitle("Dashboard")
  },
  data () {
    return {
      obj: {
        username: "Hello",
        year: 1000,
        'only-letters': 'aa8',
        'favored-food': '',
        'force-side': '',
        'policy-read': false
      },
      message: "<-- click to validate everything!",
      schema: {
        username: {
          validation: ["required"],
          format: ["cleanSpaces"]
        },
        year: {
          validation: ["required", { name: "integer", params: [{ min: 1900, max: 2015 }] }]
        },
        "only-letters": {
          validation: ["letters"]
        },
        "policy-read": {
          validation: ["mustCheck"]
        },
        "favored-food": {
          validation: [{ name: "required", message: "Please select your favorite food" }]
        },
        "force-side": {
          validation: [{ name: "required", message: "Please select a side of the force" }]
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

demoview(Dashboard)

export default Dashboard;
</script>

<style lang="scss">
</style>
