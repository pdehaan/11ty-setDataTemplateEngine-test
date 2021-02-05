module.exports = (eleventyConfig) => {
  // console.log(Object.keys(eleventyConfig).sort());

  return {
    dir: {
      input: "src",
      output: "www"
    }
  }
};
