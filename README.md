<h1 align="center">Netflix Clone</h1>
<p align="center">
  <img  alt="Netflix" height="128px" width="128px" src="https://github.com/Skeeb32/Netflix-Clone/blob/main/logo.svg">
</p>
<h1 align="center"><a href="https://netflix-clone-ba11c.web.app/">Netflix-Website</a></h1>

<h3 align="center">## Building Netflix from Scratch Using React (Custom Hooks, Context, Portals), Firebase, Compound & Styled Components</h3>

## Objective:
- To implement the basic understanding of React.
- Understanding React Router by routing between links.
- Fetching data from API and populating the UI as per route link.
- Progressive Web App for React App [update](https://reactjs.org/blog/2017/05/18/whats-new-in-create-react-app.html#progressive-web-apps-by-default)
<p>This application (a Netflix clone) was built using React (Custom Hooks, Context), Firebase & Styled Components. I have built the following pages within this application: sign in, sign up, browse & lastly the homepage. There are four different pages, some using protected routes with auth listeners. Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.</p>
<p>I used compound components (just a design pattern) to build my components, and there's over 10 examples as to how these are used. The styling is all handled via styled components. Using compound components made my actual dumb components really easy to test.</p>

## Local setup:
- Run `yarn install` to install all dependencies.
- Run `yarn start` to start the development server.
- In your favorite browser open http://localhost:3000/#/page=0

## Netflix Tutorial link:
(10 Hour Tutorial by Karl Hadwen Here: https://www.youtube.com/watch?v=x_EEwGe-a9o)

## Available Scripts

In the project directory, you can also try to run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Test setup:
- Run `yarn install` to install all dependencies.
- Run `yarn test` to start the development server.
