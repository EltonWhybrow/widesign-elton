module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            syntax: "postcss-scss",
            ident: "postcss",
            plugins: () => [
              // require("postcss-import"),
              // require("tailwindcss")("./tailwind.config.js"),
              // require("autoprefixer"),
            ],
          },
        },
      },
    ],
  },
};
