# Cero UI
Cero is a card game web application based on Crazy Eights. The UI and API for Cero is split between two code bases: `cero-ui` and `cero-api`. 
This UI is built using React and Material UI, and communicates game actions to the `cero-api` backend.

_Card assets were created by Cara Sheridan._

## Try it Out

You can play the game [here](http://34.83.61.213).

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
1. Change the port used for `cero-ui` in `docker-compose.dev.yaml` from `80:80` to `80:3000`.
2. Run `docker-compose up`
3. Access the application from `http://localhost:3000`.

### Development Environment
To set up an environment for development:
1. Install the application with `npm install`
2. Start the application with `npm run start:dev`
3. Run the API and redis store with `docker-compose up`
4. Access the application from `http://localhost:3000`.

### Production Environment
On your host server:
1. Copy over the `docker-compose.yaml` file from the project root onto your host server.
2. Run `docker-compose up`
3. Access the application from `http://<your ip or host>`.