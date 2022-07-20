INSERT INTO users (username, email, password) 
VALUES
    ('Ismael', 'someone@gman.com', 'pass'),
    ('Daiana', 'someone@gone.com', 'password'),
    ('Taro', 'someone@tone.com', 'qwerty'),
    ('Reece', 'someone@tnone.come', '123qwe');

INSERT INTO habits (title, frequency, progression, completed, streak, user_id) 
VALUES
    ('Do JavaScript', 5, 0, 't', 0, 1),
    ('Go Jogging', 2, 0, 'f', 1, 1),
    ('Drink Water', 8, 0, 't', 7,  1),
    ('Go Swimming', 1, 0, 't', 9, 3);


INSERT INTO images (src) 
VALUES
    ('./images/avatar1.png'),
    ('./images/avatar2.png'),
    ('./images/avatar3.png'),
    ('./images/avatar4.jpg'),
    ('./images/avatar5.jpg'),
    ('./images/avatar6.png');

