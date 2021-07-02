# Cero UI
Cero is a card game web application based on Crazy Eights. The UI and API for Cero is split between two code bases: `cero-ui` and `cero-api`. 
This UI is built using React and Material UI, and communicates game actions to the [cero-api](https://github.com/drodriguln/cero-api) backend.

_Card assets were created by Cara Sheridan._

## Try it Out
You can play the game [here](http://54.160.72.103)!

## Path to v1.0
This project is still a work in progress, and as such there are milestones yet to hit before hitting the first major release.

 - [x] session controlled by api
 - [x] dockerize
 - [x] make available in the cloud
 - [ ] unit tests (jest + @testing-library/react)
 - [ ] mobile friendly

## Getting Started

### Prerequisites
Most setups will require:
- `docker`
- `docker-compose`

A development setup will also require:
- `nodejs 14`
- `npm 6`

### Local Environment
To run this app locally:
1. Run `docker-compose up`
2. Access the application from `http://localhost`.

### Development Environment
For development, the UI is run with webpack-dev-server, which will also handle proxying to the API in place of nginx.

To set up an environment for development:
1. First, start up the API and redis store with `docker-compose -f docker-compose.dev.yaml up`
2. Install the application with `npm install`
3. Start the application with `npm run start:dev`
4. Access the application from `http://localhost:3000`.

### Production Environment
On your host server:
1. Copy over the `docker-compose.yaml` file from the project root onto your host server.
2. Run `docker-compose up`
3. Access the application from `http://<your ip or host>`.
