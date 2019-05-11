## Material

- Slides [here](https://slides.com/miguelcast-1/deck)
- Videos [Part 1](https://www.loom.com/share/65d9126e892a4655bcb1f8307c38b301)
[Part 2](https://www.loom.com/share/bd3ed4f428bc490a9931bf456e1eb19d)

## Prerequisites

- NodeJs 10+
- Docker

## Install
Install dependencies in server and frontend folders
```
yarn install
```
or 
```
npm install
```
Install prisma
```
npm i -g prisma
```
Prisma containers
```
cd server/prisma
docker-compose up -d
```
next
```
prisma deploy
```
