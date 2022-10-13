INSERT INTO languages(language_name, language_name_en) VALUES
    ('Китайский', 'Mandarin Chinese'),
    ('Испанский', 'Spanish'),
    ('Английский', 'English'),
    ('Хинди', 'Hindi'),
    ('Арабский', 'Arabic'),
    ('Бенгальский', 'Bengali'),
    ('Португальский', 'Portuguese'),
    ('Русский', 'Russian'),
    ('Японский', 'Japanese'),
    ('Лахнда', 'Western Punjabi'),
    ('Вьетнамский', 'Vietnamese'),
    ('Маратхи', 'Marathi'),
    ('Телугу', 'Telugu'),
    ('Малайский', 'Malay'),
    ('Турецкий', 'Turkish'),
    ('Корейский', 'Korean'),
    ('Французский', 'French'),
    ('Немецкий', 'German'),
    ('Тамильский', 'Tamil'),
    ('Урду', 'Urdu'),
    ('Яванский', 'Javanese'),
    ('Итальянский', 'Italian'),
    ('Персидский', 'Iranian Persian'),
    ('Польский', 'Polish'),
    ('Азербайджанский ', 'Azerbaijani '),
    ('Румынский', 'Romanian'),
    ('Узбекский ', 'Uzbek'),
    ('Нидерландский', 'Dutch'),
    ('Чешский', 'Czech'),
    ('Белорусский', 'Belarusian'),
    ('Словацкий', 'Slovak'),
    ('Украинский', 'Ukrainian'),
    ('другой', 'other');


INSERT INTO countries (country_name, country_name_en) VALUES 
    ('Австралия', 'Australia'),
    ('Австрия', 'Austria'),
    ('Азербайджан', 'Azerbaijan'),
    ('Албания', 'Albania');


INSERT INTO statuses (status_name) VALUES ('ADMIN'), ('USER'), ('PRO_USER');

INSERT INTO resource_types(resource_type_name) VALUES ('WEB_SITE'), ('VK'), ('IG');

INSERT INTO users (user_email, user_password, user_nik, fk_status_id, fk_country_id, user_city) VALUES
    ('e@m.com', 'p1', 'admin', 1, 3, 'Mordor'),
    ('em@m.com', 'p12', 'user1', 2, 1, 'City1'),
    ('ejdj@m.com', 'p123', 'misha', 1, 3, 'City12'),
    ('eslskj@m.com', 'p144', 'xuha', 1, 3, 'City123');

INSERT INTO users (user_email, user_password, user_nik, user_first_name, user_last_name, fk_status_id, fk_country_id, user_city, user_avatar, user_date_birth, description) VALUES
    ('eqqwww@m.com', 'p1', 'admin', 'Admin-first', 'Admin-last', 2, 1, 'New Mordor', '/avatars/user_avatar/', '1917-01-01', 'it is description');

INSERT INTO comedians(
    comedian_first_name, comedian_last_name, fk_country_id, comedian_city, comedian_avatar, comedian_date_birth
) VALUES 
('Слава', 'Комиссаренко', 1, 'Минск', '/avatars/comedian/comedian_avatar/s-komisarenko.jpeg', '1985-07-27'),
('Дмитрий', 'Романов', 2, 'Одесса', '/avatars/comedian/comedian_avatar/d-romanov.jpeg', '1985-01-08');

INSERT INTO comedians(
    comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en, fk_country_id, comedian_city, comedian_avatar, comedian_date_birth
) VALUES 
('Идрак', 'Мирзализаде', 'Idrak', 'Mirzalizade', 3, '', '/avatars/comedian/comedian_avatar/idrak.jpeg', '1985-01-08'),
('Денис', 'Чужой', 'Denis', 'Chuzhoy', 2, '', '/avatars/comedian/comedian_avatar/Chuzhoy.jpeg', '1988-07-23');


INSERT INTO places(place_name, fk_country_id, place_city, fk_user_added_id, description) VALUES
('SUPER-CLUB', 1, 'Tula', 2, 'very nice');


INSERT INTO resources(fk_resource_type_id, fk_user_id, resource_href) VALUES 
(2, 2, 'https://vk.com/vk-1'),
(3, 2, 'https://instagram.com/ig-1');

INSERT INTO resources(fk_resource_type_id, fk_place_id, resource_href) VALUES 
(2, 1, 'https://vk.com/vk-1'),
(3, 1, 'https://instagram.com/ig-1');

INSERT INTO pictures(fk_user_id, picture_path) VALUES 
(2, '/pic/user/avatar/user-2.jpg'),
(3, '/pic/user/avatar/user-3.jpg');

INSERT INTO pictures(fk_comedian_id, picture_path) VALUES 
(2, '/pic/comedian/avatar/ca1-2.jpg'),
(3, '/pic/comedian/pictures/ca2-3.jpg');


INSERT INTO comedian_views(fk_user_id, fk_comedian_id) VALUES
(1, 1),
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(3, 3),
(3, 3),
(3, 3),
(4, 4),
(4, 1),
(4, 2);

