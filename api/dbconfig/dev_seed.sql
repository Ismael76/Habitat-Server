INSERT INTO users (username, email, password) 
VALUES
    ('Ismael', 'test@outlook.com', '$2a$12$UAB3s2U5aCEONKBwqyRTpOE0VyPXklQUYwhRQlrFxlIszuBjhrfti'),
    ('Daiana', 'test2@outlook.com', '$2a$12$UAB3s2U5aCEONKBwqyRTpOE0VyPXklQUYwhRQlrFxlIszuBjhrfti'),
    ('Taro', 'test3@outlook.com', '$2a$12$oPB5kdhHuJwC7X.itauO3OmAEoOrbckK3aZY4zGDkqp.6yMkzmVLq'),
    ('Reece', 'test4@outlook.come', '$2a$12$LWLDPBH7tJiGi6P8F.JvJO8rd/xMnW4kMC6XDbjvUSiZhqa1F6WMS');

INSERT INTO habits (title, frequency, progression, completed, streak, user_id) 
VALUES
    ('Eat Apples', 2, 0, 'f', 3, 1),
    ('Drink Water', 8, 0, 'f', 366, 1),
    ('Go Gym', 1, 0, 'f', 34,  1),
    ('Study', 1, 0, 'f', 16, 1),
    ('Eat Meals', 3, 0, 'f', 45,  1),
    ('Go Jogging', 1, 0, 'f', 21, 1),
    ('Go For A Walk', 4, 0, 'f', 35, 2),
    ('Drink Water', 2, 0, 'f', 743, 2);
    ('Study', 1, 0, 'f', 6, 3),
    ('Eat Meals', 3, 0, 'f', 29,  3),
    ('Go Jogging', 1, 0, 'f', 364, 3),
    ('Go For A Walk', 4, 0, 'f', 364, 3),
    ('Drink Water', 2, 0, 'f', 6, 3);



INSERT INTO images (src) 
VALUES
    ('https://lh3.googleusercontent.com/y_kq-7Il8AEOHu55u4i4NUGYV2TAzpCRuM0z3xul0FqBsoI24eDAHEP0s3zeQvYglu3VBk39YIsZyOQqkJYyTRFb7IyrWL7MbdYH0HA=w1400-k'),
    ('https://media.contentapi.ea.com/content/dam/eacom/common/pvz-2-cp-30832-featured.png.adapt.crop16x9.575p.png');

