# user-mgmt-ui

A React frontend intended to be a template for my other projects.


## NPM quick start

In the project directory, you can run:

### `npm install`

Installs the project dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Docker quick start

In the project directory, you can run:

### `docker build -t user-mgmt-ui .`

Build the app Docker image.

### `docker container run -p 8080:80 user-mgmt-ui:latest`

Run the app Docker container on port 8080.

### `docker build -t user-mgmt-ui . --file ./Dockerfile.test`

Run the app tests using Docker (this is how the tests will be ran during automated deployments).


## Resources

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).
