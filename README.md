# Grana

## Tech

- [NextJS](https://nextjs.org/) + [tRPC](https://trpc.io/) as full-stack
- [Mantine](https://mantine.dev/) for styling
- [Prisma](https://www.prisma.io/) + [Neon](https://neon.tech/) with [TimescaleDB](https://www.timescale.com/) extension for DB operations
- [Clerk](https://clerk.com/) for auth
- Deployed with [Vercel](https://vercel.com/)

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
