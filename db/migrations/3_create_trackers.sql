DROP TABLE IF EXISTS tracker;

CREATE TABLE tracker (
    id serial PRIMARY KEY,
    date DATE NOT NULL,
    progress INT NOT NULL,
    status boolean NOT NULL,
    reward boolean NOT NULL,
    habit_id INT REFERENCES habits (id)
);