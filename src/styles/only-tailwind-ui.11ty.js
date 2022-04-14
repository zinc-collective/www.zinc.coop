const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.

const fileName = "only-tailwind-ui.css";

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, `../styles/${fileName}`);
    return {
      permalink: `styles/${fileName}`,
      rawFilepath,
      rawCss: fs.readFileSync(rawFilepath)
    };
  }

  async render({ rawCss, rawFilepath }) {
    return postcss([
      require("tailwindcss"),
      require("autoprefixer")
    ])
      .process(rawCss, { from: rawFilepath })
      .then(result => result.css);
  }
};
