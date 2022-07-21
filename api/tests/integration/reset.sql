-- TRUNCATE line is creating an error which will not allow the db to reset.
 TRUNCATE users, habits, images RESTART IDENTITY;

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
    ('Go Swimming', 1, 1);

INSERT INTO images (src) 
VALUES
    ('http://www.testingimage.com');
