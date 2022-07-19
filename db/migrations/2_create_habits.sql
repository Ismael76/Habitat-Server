DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    title varchar(200) NOT NULL,
    frequency INT NOT NULL,
    user_id INT not null,
    status boolean NOT NULL DEFAULT false
);