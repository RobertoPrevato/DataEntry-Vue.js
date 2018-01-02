const WWWROOT = "./httpdocs/";
const JS_DEST = WWWROOT + "scripts/";
const CSS_DEST = WWWROOT + "styles/";
const FONTS_DEST = WWWROOT + "fonts/";
const IMG_DEST = WWWROOT + "images/";

module.exports = {

  browserPort: 3000,

  // root folder to less source code
  lessRoot: "./source/styles/**/*.less",

  lessToCss: [
    ["./source/styles/styles.less", CSS_DEST]
  ],
  
  esToJs: [
    {
      entry: "./source/scripts/main.js",
      destfolder: JS_DEST,
      filename: "root"
    }
  ],

  toBeCopied: [
    {
      src: "source/index.html",
      dest: WWWROOT
    },
    {
      src: "source/favicon.ico",
      dest: WWWROOT
    },
    {
      src: "source/images/*",
      dest: IMG_DEST
    }
  ],

  test: {
    karma: "karma.conf.js"
  },

  eslint: {
    src: ["gulp/**/*.js", "karma.conf.js", "app/**/*.js"],
    params: {
      rules: {
        "linebreak-style": ["error", "windows"], // "windows"
        "quotes": [2, "double"] // 2, "single", "avoid-escape"
      }
    }
  }
};
