DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    title varchar(200) NOT NULL,
    frequency INT NOT NULL,
    progression INT, 
    completed BOOLEAN NOT NULL,
    streak INT NOT NULL,
    user_id INT REFERENCES users (id)
);