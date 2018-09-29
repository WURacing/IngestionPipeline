# IngestionPipeline
Car -> Transform -> DB + UI

## Running

In your command line, execute

```bash

docker-compose build
docker-compose up

```

This should spin up the entire platform as required.

> http://0.0.0.0:3000/

Should be the public endpoint for the front end.

## Updating a sevice

All services should have live reload enabled- simply save the file and wait for changed to be pushed to docker.

In the case of a build-level modification (webpack config update, Dockerfile/Docker-Compose, new npm/pip package), a `docker-compose build` and/or `docker-compose up` may be required