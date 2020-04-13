module.exports = function(config) {
  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addPassthroughCopy("src/CNAME");
  config.addPassthroughCopy("src/**/*.pdf");

  return {
    dir: {
      input: "src",
      output: "dist",
      data: `_data/${env}`
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  }
}
