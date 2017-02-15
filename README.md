## Synopsis

This UI implementation of the Online Jeans Company technical test for the Guppy UI role at Credit Suisse. It provides the purchasing team with a simple and intuitive tool to query top selling items by month, manufacturer, country, gender, size, colour and style. <br>

The tool is composed by a selector, the parameter from the list above you want to find about, and a list of filters that will dynamically display upon selection of the querying parameter. Each and every is searchable (type to see the options decreasing) and filter accepts multiple selections. Selecting multiple filters applies an AND operation and selecting multiple options within the same filter runs an OR operation.

The results table or a 'No results found' message is shown when at least the selector has been specified.

The UI is fluid responsive with 2 breakpoints set a 600px and 768px, resize the window to see it working.

## Technologies

The solution was implemented using React. Other technologies include:
* webpack to do all sorts tasks required (uglify, minify, etc) to build the production ready bundle and watch for changes and hot-reload them in development mode
* babel to transpile ES6 and JSX code

As it wasn't required, the data is provided and loaded directly from a static file. On a live system the approach would obviously be different and would do all the processing on the backend and build a simple Node API to retrieve the results for a specific query (using query string parameters fir filtering).

## Installation

Run `npm i` inside the project root directory to get its dependencies.

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed! Follow the following steps prompted to view it in a browser.

## Sample data

The app ships with a simple data sample data/index.json file. <br>

If you want to try it to use a bigger sample, you can run `npm run seed` which will run the script scripts/seed.js and override the json file above with some hundreds of thousands of rows randomly generated. Note the app will take slightly more time to load as this data is required synchronously and it's only been built for dev purposes. In production, a different approach would be taken by doing the processing on the server and return back the results via a JSON endpoint.


## Tests

Two types of tests have been included in the Test suites.

### Snapshot Testing

Instead of rendering the graphical UI, which would require building the entire app, it is used a test renderer to quickly generate a serializable value for the React tree.

The first time this test is run, Jest creates a snapshot file inside a __snapshots__ directory. On subsequent test runs Jest will simply compare the rendered output with the previous snapshot. If they match, the test will pass. If they don't match, either the test runner found a bug in your code that should be fixed, or the implementation has changed and the snapshot needs to be updated.

### Unit tests

The core querying and filtering logic lives in utils.js and multiple scenarios have been covered including (but not only) the 3 specified on the test.<br>

******************

**Note that more tests could have been implemented but this was assumed enough for the case and as a proof of concept.**<br>

Run `npm test` to run the Test Suites.<br>

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

## Author

João Silva - Web Engineer <br>
joao.c7@gmail.com <br>
[LinkedIn](https://www.linkedin.com/in/joão-silva-9745a826)

## License

A short snippet describing the license (MIT, Apache, etc.)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
