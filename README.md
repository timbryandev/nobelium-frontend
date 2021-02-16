# Nobelium

[Nobelium](https://en.wikipedia.org/wiki/Nobelium) is “a synthetic chemical element with the symbol No and atomic number 102. It is named in honour of Alfred Nobel”. It's also the name I have chosen for this passion project - my **Nobelium** Quiz App.

The purpose of this application is two-fold: to give question authors a place to author their quizzes and a place for quiz takers to join a quiz and take part in that session.

## Features

This project is an evolving work-in-progress,I would like to have implemented:

### Hosts

- Authenticated host login via Auth0 to allow access
- Build and view quizzes by that host
- Ability to generate and host a quiz session
- Control question flow and time-out answers
- Ability to override current participants scores in case of discrepancy or impromptu bonus points
- Running scores and leaderboard for current session

### Participants

- Let participants invent a display name for themselves or their team with the option to have one randomly generated, and to join a session by entering a "Game Code".
- See current question text
- See current question options
- Users will need to submit their response to prevent accidental presses
- See the correct answer when the host reveals it
- Running scores and leaderboard for current session

## Frameworks, Languages & Libraries

Typical web tech consisting of HTML5, CSS3 and Javascript, plus:

- [Typescript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/documentation/syntax)
- [React](https://reactjs.org/)
- [Bootstrap V4](https://getbootstrap.com/) with [Bootswatch Solar](https://bootswatch.com/solar/)
- [Auth0](https://auth0.com/) for Host Authentication
- [Unique Names Generator](https://github.com/andreasonny83/unique-names-generator) for generating random user/team names

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
