# Telia Cats Monorepo

## Development server

Node version 18.

Run `npm install`

Run `npx nx run-many --target=serve` to launch dev server for both `cats-api` and `cats-webapp`. Api available at http://localhost:3333/api/, webapp available at http://localhost:4200/. That's it.

If you want to run them separately, run `npx nx serve cats-webapp` for a dev webapp standalone server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `npx nx serve cats-api` for a dev api standalone server. Navigate to http://localhost:3333/api/

Unit tests can be run by `npx nx run cats-webapp:test` and `npx nx run cats-api:test`

Linting `npx nx run cats-webapp:lint` and `npx nx run cats-api:lint`

`npx prisma studio` if you want to see local SQLite database.

I also recommed to install vscode [Nx console extension](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) to see all available scripts.

## What's inside?

This repo was generated with `NX` monorepo tool. We have `React` webapp and `Nest.js` api. Api uses `Prisma` as an ORM and we have SQLite db inside to make it simple. A simple CRUD application for cats.

### API:

```
GET http://localhost:3333/api/cats?temperament=agile&pageSize=4&page=1&name=mau

GET http://localhost:3333/api/cats/35

DELETE http://localhost:3333/api/cats/35

POST http://localhost:3333/api/cats
Body:
{
    "name": "Bajorkiemio Rainasis",
    "weight_imperial": "1",
    "weight_metric": "2",
    "original_id": "ryz3",
    "origin": "Ltu",
    "country_code": "LT",
    "description": "Katinas is lietuvisko kiemo.",
    "life_span": "ilgiau nei manom",
    "indoor": 1,
    "lap": 2,
    "alt_names": "B.R.R.R",
    "temperament": "Ispaniskas"
}

PUT http://localhost:3333/api/cats/98
Body:
{
    "name": "Rajono Kebabinis",
    "weight_imperial": "1",
    "weight_metric": "2",
    "original_id": "ryz3",
    "origin": "Ltu",
    "country_code": "LT",
    "description": "Katinas is lietuvisko kiemo.",
    "life_span": "ilgiau nei manom",
    "indoor": 1,
    "lap": 2,
    "alt_names": "B.R.R.R",
    "temperament": "Ispaniskas"
}
```

## How it went?

Well, I had an opportunity to try something new so I decided to go with monorepo. It seemed like this mini project is a good fit. First I tried Turborepo, burned some time, couldn't make it work with shared types lib (missmatching configs between NestJs and React parts), ditched it for NX. NX went smoothly I would say, it has some helpers to get you started but they seem a little bloated, there are definetly much more files generated here compared to Turborepo. For api I chose NestJs as it is fully Typescript, Prisma ORM as it can fully type your data which goes inside db what comes back, very convenient. You can also use prisma generated types inside UI application! Added CRUD api, added validation with Nests recommended way (class validators), added SQLite for simplicity. On UI side created a simple table which shows 4 columns but it can be easily extended. Added pagination, column filter. Used Reac Query for data fetching, it makes it easy to manage state and has a bunch of helper features like retries, caches, loading state and etc.. Wrote some unit tests with mocks, I left some boiler plate unit tests too. I did not implement some of the task items like sorting for example. In general I could say I made the task harder for myself by using unknown tools (unknown for me) but I learned something new in the process and I might use it in future, this is the way.

## Useful commands

`npx nx g @nrwl/react:app cats-webapp` Generates react app

`npx nx g @nrwl/node:lib shared-types` Generates node lib

`npx nx g @nrwl/react:component button --project cats-webapp` Generate react component.

`npx prisma db seed` Seeds db.

`npx prisma studio` Opens database UI.

`npx prisma db push` Pushes schema to database

`npx prisma generate` Generates TS types.

`nest g resource name`

`npx nest generate filter filter-name`
