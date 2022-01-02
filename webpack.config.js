const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/example.ts',
    // output:{
    //     path: path.resolve(__dirname,'./dist'),
    //     // library: 'var',
    //     // libraryExport: '',
    //     libraryTarget: 'umd',
    //     globalObject: 'this',


    // },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename:  `[name].min.js` ,
        library: 'MyLibrary',
        libraryExport: 'default',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    resolve:{
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    module:{
        rules: [
            {
              test: /\.tsx?$/,
              use: [{ loader: 'ts-loader' }],
              exclude: /node_modules/,
            },
          ],
          
    },
    
      devServer: {
        port: "3000",
        static: {
          directory: path.join(__dirname),
        }
      }


}