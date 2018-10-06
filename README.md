#This is a Sample Repository to get you started on React Web Applications.

#REQUIREMENTS:
    1. NODE-JS : version used here -> v8.10.0

#Package.json file[Create & Why we use these Modules]:

1. Run npm init -y to create the package.json file from inside your root folder.
2. Now we intall the basic 'dependencies' we need.
    a. npm install --save react react-dom
3. Now we install the 'devDependencies' we need
    a. npm i --save-dev babel-core babel-loader@7 babel-preset-env babel-preset-react 
    b. npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
4. create the "start" & "build" commands to setup the development server at 'npm start' command and build the final code at 'npm run build' command.

#Note: 
1. WEBPACK is a packaging app that maps the components of your application and builds a single file for all your components complete with all dependencies. 
2. WEBPACK-DEV-SERVER is the development server webpack provides.
3. WEBPACK-CLI allows to run webpack commands used to run build script.
4. BABEL: React uses ES6 code which needs to be transpile to browser friendly code code.
5. PRESETS: env preset detect browser and compiles for browser.
6. BABEL LOADER : To compile jsx used by react.
7. HTML-WEBPACK-PLUGIN: Generate build html.

#webpack.config.js [ Webpack build configuration]:
#.babelrc file: The file is an object used to specify the presets that we wanna use in the project
