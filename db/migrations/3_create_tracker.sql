DROP TABLE IF EXISTS tracker;

CREATE TABLE tracker (
    id serial PRIMARY KEY,
    date DATE DEFAULT CURRENT_DATE,
    progress INT NOT NULL DEFAULT 0,
    status boolean NOT NULL DEFAULT 0,
    reward boolean NOT NULL DEFAULT 0,
    habit_id INT REFERENCES habits (id)
);