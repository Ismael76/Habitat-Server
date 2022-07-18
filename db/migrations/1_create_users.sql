DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(200) NOT NULL,
    email varchar(500) NOT NULL,
    password varchar(200) NOT NULL
);