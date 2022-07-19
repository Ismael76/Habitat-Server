TRUNCATE users, users RESTART IDENTITY;

INSERT INTO users (username, email, password) 
VALUES
    ('Ismael', 'ismael@gman.com', 'pass'),
    ('Daiana', 'daiana@hotmail.com', 'password'),
    ('Taro', 'taro@yahoo.com', 'qwerty'),
    ('Reece', 'reece@aol.com', '123qwe')
