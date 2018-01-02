<template>
  <div id="multiple-fields">
    <section>
      <h1>{{t("voc.MultipleFields")}}</h1>
      <DataEntryForm ref="form" :schema="schema" :onFormat="handleValueChange">
        <div id="example-form">
          <fieldset>
            <div class="emails-region">
              <dl id="emails" data-type="email">
                <dt>
                  <label>Emails:</label>
                </dt>
                <dd :key="o.key" v-for="(o, index) in obj.emails">
                  <input type="text" v-bind:name="index > 0 ? 'email-optional' : 'email'" v-model="o.address" />
                  <button type="button" class="btn remove" v-on:click="() => removeItem('emails', o)" v-if="index > 0">Remove</button>
                </dd>
              </dl>
              <button type="button" class="btn add" v-on:click="addNewEmail">Add</button>
            </div>

            <div class="phones-region">
              <dl id="phones" data-type="phone">
                <dt>
                  <label>Phones:</label>
                </dt>
                <dd :key="o.key" v-for="(o, index) in obj.phones">
                  <input type="text" v-bind:name="index > 0 ? 'phone-optional' : 'email'" v-model="o.number" />
                  <button type="button" class="btn remove" v-on:click="() => removeItem('phones', o)" v-if="index > 0">Remove</button>
                </dd>
              </dl>
              <button type="button" class="btn add" v-on:click="addNewPhone">Add</button>
            </div>
          </fieldset>
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
        <li>In this example, the first email address and first phone number are required</li>
        <li>Additional contacts, added clicking on the "Add" buttons, are optional but they must still contain valid values</li>
        <li>Since validation rules are applied to HTML elements with matching `name` (implementation detail of DomHarvester class), we can handle <em>n</em> fields using only two properties definition</li>
      </ul>
    </section>
  </div>
</template>

<script>
import I from "ilocale"
import DataEntryForm from "./common/dataentry.vue"
import demoview from "./common/demoview"

var k = 0;

function getUniqueId(name) {
  k++;
  if (!name) name = "id";
  return `${name}-${k}`;
}

function removeItem(a, o) {
  var x = -1;
  for (var i = 0, l = a.length; i < l; i++) {
    if (a[i] === o) {
      x = i;
      break;
    }
  }
  a.splice(x, 1);
}

const MultipleFields = {
  created () {
    I.setTitle("MultipleFields")
  },
  data () {
    return {
      obj: {
        emails: [{
          key: getUniqueId("email"),
          address: ""
        }],
        phones: [{
          key: getUniqueId("phone"),
          number: ""
        }]
      },
      message: "<-- click to validate everything!",
      schema: {
        "email": {
          validation: ["required", "email"]
        },
        "phone": {
          validation: ["required", "phone"]
        },
        "email-optional": {
          validation: ["email"]
        },
        "phone-optional": {
          validation: ["phone"]
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
    addNewPhone() {
      const obj = this.obj;
      obj.phones.push({
        key: getUniqueId("phone"),
        number: ""
      });
    },
    addNewEmail() {
      const obj = this.obj;
      obj.emails.push({
        key: getUniqueId("email"),
        address: ""
      });
    },
    removeItem(from, o) {
      const obj = this.obj;
      removeItem(obj[from], o)
    }
  },
  components: {
    DataEntryForm
  }
}

demoview(MultipleFields)

export default MultipleFields;
</script>

<style lang="scss">
</style>
