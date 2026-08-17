CDL

# dev

echo "DB_HOST=localhost\nDB_USER=root\nDB_PASSWORD=root\nDB_NAME=cdl" > .env.local
yarn

yarn s

# build

cp .env.local .env.production, fill your values.

yarn build_prod, yarn start_prod
