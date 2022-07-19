DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    title varchar(200) NOT NULL,
    frequency INT NOT NULL,
    user_id INT REFERENCES users (id),
    status BOOLEAN NOT NULL DEFAULT 0
);