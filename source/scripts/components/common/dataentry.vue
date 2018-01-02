<template>
  <div class="ug-dataentry">
    <slot></slot>
  </div>
</template>

<script>
import DataEntry from "dataentry"
import DataEntryDom from "dataentry/dom"

export default {
  name: "DataEntryForm",
  props: ["schema", "onFormat"],
  created: () => {
    
  },
  data: () => {
    return {
    };
  },
  methods: {
    validate() {
      return this.dataentry.validate();
    }
  },
  mounted() {
    const node = this.$el;
    const props = this.$props;
    const schema = props.schema;
    if (!schema)
      throw new Error("missing `schema` property, cannot define a dataentry without a schema.");

    const onFormat = props.onFormat;
    if (!onFormat)
      console.warn("missing `onFormat` property, an handler is necessary to propagate formatting to state!");
    else if (typeof onFormat != "function")
      throw new Error("onFormat property must be a function");

    // add reference to the dataentry business logic to the model
    const dataentry = new DataEntry({
      element: node,
      marker: DataEntryDom.DomDecorator,
      harvester: DataEntryDom.DomHarvester,
      binder: DataEntryDom.DomBinder,
      schema: schema
    })

    if (onFormat) {
      // when a value is formatted,
      dataentry.on("format", function (field, name, value) {
        switch (onFormat.length) {
          case 1:
            onFormat(name, value)
          break;
          case 2:
            onFormat(name, value)
          break;
          case 3:
            onFormat(field, name, value)
          break;
          default:
            throw new Error("onFormat function must handle two or three named parameters");
        }
      })
    }

    this.dataentry = dataentry;
  },
  beforeDestroy() {
    // dispose the dataentry
    this.dataentry.dispose();
    delete this.dataentry;
  }
}
</script>