# Grana

## Stack

- [NextJS](https://nextjs.org/) + [tRPC](https://trpc.io/) (T3 stack without Tailwind essentialy)
- [Mantine](https://mantine.dev/) for styling
- [Prisma](https://www.prisma.io/) + [Neon](https://neon.tech/) with [TimescaleDB](https://www.timescale.com/) extension for DB operations
- [Clerk](https://clerk.com/) for auth
- Deployed with [Vercel](https://vercel.com/)

## About

Grana is a sample project for integrating aforementioned technologies together.
There is sample dataset that can be played with inside the app
but requires to be a member of an organization so change from your personal workspace to a organization workplace.

## Known Issues

This repo is a working example however there are some known issues which requires workarounds, such as:

- [visx issue #1637](https://github.com/airbnb/visx/issues/1637)
- [prisma issue #8325](https://github.com/prisma/prisma/issues/8325)
- This is not a t3 problem but the link has a temporary solution[create-t3-app issue #1180](https://github.com/t3-oss/create-t3-app/issues/1180)

## Pre-requisites

You'll need to install:

- [Node v18+](https://nodejs.org/en)
- [Docker](https://docs.docker.com/get-docker/) and [Compose](https://docs.docker.com/compose/) plugin
- [dotenv-cli](https://github.com/entropitor/dotenv-cli) for multiple .env files
- A set of public and secret [Clerk](https://clerk.com/) keys.

## Getting started

### Rename .env.example to .env

```bash
mv .env.example .env.local
```

Also replace `NEXT_PUBLIC_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` with your own.

### Install dependencies

```bash
npm install
```

### Unzip sample data

```bash
tar -xf ./prisma/devices_small.tar.gz -C ./prisma
```

### Setup and seed database

```bash
npm run local:setup
npm run local:migrate
npm run local:seed
```

### Run the app

```bash
npm run dev
```

Application should be running at [localhost](http://localhost:3000)

## Testing

### Copy .env.local to .env.test

```bash
mv .env.local .env.test
```

### Run the tests

```bash
npm run test:integration
```
