module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: 'REACT_APP_API_KEY',
          moduleName: "@env",
          path: ".env",
        },
      ],
    ]
  };
};