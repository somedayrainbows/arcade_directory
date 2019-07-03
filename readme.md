

create postgres db: createdb arcade_development
run migrations: npx sequelize db:migrate
run seeds: npx sequelize db:seed:all
undo last seed: npx sequelize db:seed:undo
