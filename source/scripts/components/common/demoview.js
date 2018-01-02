/**
 * Common methods for the demo views.
 * This is just an example!!
 */

function demoview(Component) {

  const methods = {
    handleValueChange(name, value) {
      const obj = this.obj;
      if (name == "year" && value) {
        value = parseInt(value);
      }
      obj[name] = value;
    },
    validate() {
      const self = this;
      self.$refs.form.validate().then(function (result) {
        console.log(result);
  
        if (!result.valid)
          // do nothing: the dataentry already did everything
          return self.message = "The form contains errors!";
  
        // everything is valid
        console.info("Everything is valid!", result.values);
        self.message = "Everything is valid!";
      });
    }
  };

  for (let x in methods) {
    Component.methods[x] = methods[x];
  }

}

export default demoview;