INSERT INTO users (username, email, password) 
VALUES
    ('Ismael', 'someone@gman.com', 'pass'),
    ('Daiana', 'someone@gone.com', 'password'),
    ('Taro', 'someone@tone.com', 'qwerty'),
    ('Reece', 'someone@tnone.come', '123qwe');


INSERT INTO habits (title, frequency, user_id) 
VALUES
    ('Do JavaScript', 5, 1),
    ('Go Jogging', 2, 1),
    ('Drink Water', 8, 1),
    ('Go Swimming', 1, 3)

INSERT INTO tracker (date, progress, status, habit_id) 
VALUES
    ('12-06-2020', 5, true, 1),
    ('14-02-2021', 2, false, 1),
    ('13-02-2022', 8, true, 1),
    ('13-02-2022', 1, true, 3)