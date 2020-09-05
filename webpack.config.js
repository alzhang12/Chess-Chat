const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    chat: './chat/js/chat-main.jsx',
    search: './chat/js/main.jsx',
    profile: './chat/js/profile-main.jsx',
    chess: './chat/js/chess-main.jsx',
  },
  output: {
    path: path.join(__dirname, '/chat/static/js/'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        // Test for js or jsx files
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
