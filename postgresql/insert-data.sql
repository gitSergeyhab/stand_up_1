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
INSERT INTO places(place_name, fk_country_id, place_city, fk_user_added_id, description) VALUES
('SUPER-Moskow-CLUB', 1, 'Moskow', 3, 'burn this place'),
('SPB-CLUB', 1, 'St Peterburg', 3, 'hate this place'),
('LONDON-CLUB', 2, 'London', 1, 'fuck this place');

INSERT INTO resources(fk_resource_type_id, fk_user_id, resource_href) VALUES 
(2, 2, 'https://vk.com/vk-1'),
(3, 2, 'https://instagram.com/ig-1');

INSERT INTO resources(fk_resource_type_id, fk_place_id, resource_href) VALUES 
(2, 1, 'https://vk.com/vk-1'),
(3, 1, 'https://instagram.com/ig-1');

INSERT INTO resources(fk_resource_type_id, fk_comedian_id, resource_href) VALUES 
(2, 1, 'https://vk.com/vk-1'),
(2, 2, 'https://vk.com/vk-1'),
(3, 2, 'https://instagram.com/ig-1');

INSERT INTO pictures(fk_user_id, picture_path) VALUES 
(2, '/pic/user/avatar/user-2.jpg'),
(3, '/pic/user/avatar/user-3.jpg');

INSERT INTO pictures(fk_comedian_id, picture_path) VALUES 
(2, '/pic/comedian/avatar/ca1-2.jpg'),
(3, '/pic/comedian/pictures/ca2-3.jpg'),
(2, '/pic/comedian/avatar/com-22.jpg'),
(2, '/pic/comedian/avatar/com-223.jpg'),
(1, '/pic/comedian/avatar/com-223.jpg';

INSERT INTO pictures(fk_place_id, picture_path) VALUES
(1, '/pic/place/pl-122.jpg'),
(1, '/pic/place/pl-1223.jpg'),
(1, '/pic/place/pl-1223.jpg');


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

INSERT INTO show_statuses(show_status_name) VALUES('completed'), ('planned'), ('cancelled');

INSERT INTO shows(
	fk_comedian_id, fk_country_id, fk_language_id, fk_place_id, show_date, fk_user_added_id, 
	show_name, description, show_poster, fk_show_status_id
) VALUES 
(1, 1, 8, 1, '2022-01-01', 1, 
 'Спасибо, у меня всё #10', 
 'Десятый выпуск шоу «Спасибо, у меня всё» из Варшавы', 
 '/pics/shows/posters/poster-1.jpeg',1),

(1, 3, 8, 1, '2022-01-21', 2, 
 'Меня ищет КГБ', 
 'А у вас как дела, ребята ?) ', 
 '/pics/shows/posters/poster-2.jpeg',1),
 
(4, 3, 8, 1, '2021-06-06', 2, 
 'Дальше сам (Stand Up 2021)', 
 'Съёмка и монтаж: Ваня, Кристина и Женя (http://podcastodindoma.ru)

Это мой третий стендап-концерт. Я начал писать его на карантине, когда посмотрел монолог Павла Воли. Вокруг него возникли все остальные размышления о том, как быть мужчиной в современном мире, как жить после тридцати трёх лет (и стоит ли). В общем, мой обычный набор тем плюс Павел Воля. Мы вложили в этот спешл много труда и любви, очень надеюсь, что вы хорошо проведёте час времени.

Я очень благодарен стендап-комикам, которые помогали советами, шутками или просто обнимали. Особенно в этом преуспели:
— Евгений Чебатков
— Ярослава Тринадцатко
— Кристина Биткулова
— Андрей Айрапетов
Найдите и посмотрите их стендап, пожалуйста. 

Ещё хочу сказать спасибо площадкам, которые позволили работать над материалом у них: 
— Stand Up Патрики
— Stand Up Club #1
— Stand Up Store (почему-то кажется, что тут мне больше выступать не разрешат)
— Stage Stand Up (Санкт-Петербург)
— Stand Up Kazan (Казань)
— Brewki Bar (Челябинск)
— Stand Up Spot (Екатеринбург)

И куче других баров, концертных площадок и культурных центров. 

Кажется, я достаточно раз упомянул слово «стендап» в описании ролика, чтобы алгоритмы поняли, в какую нишу ютуба я хочу заскочить. Надеюсь, это последний раз, когда я сажусь и пишу настоящий SEO-текст, чтобы достучаться до новой аудитории. Думаю, что Данила Поперечный таким не занимается. 

С другой стороны — а на что ты жалуешься, Денис? Ты год занимался любимым делом, увидел очень красивую Россию в весенне-летний период, выступил в Украине, США и Австрии. На тебя приходили потрясающие умные, красивые и добрые люди. Да, их может быть меньше, чем у комиков с ТНТ, но они же классные. Хватит их обесценивать своими жалобами. Всё классно. И начни уже сочинять описания видео после приёма психотерапевта, а не до', 
 '/pics/shows/posters/poster-3.jpeg',1),
 
 (2, 2, 8, 1, '2022-01-23', 2, 
 'Скоро будет', 
 'или не будет', 
 '/pics/shows/posters/poster-4.jpeg',1);

INSERT INTO show_videos(show_videos_path, is_video_professional, minutes, fk_show_id, fk_user_id) VALUES 
('https://www.youtube.com/watch?v=vMK6_Wj7pl8', TRUE, 11, 1, 1),
('https://www.youtube.com/watch?v=8mfV4-e2KBk', TRUE, 22, 2, 1),
('https://www.youtube.com/watch?v=xT-IxupQJyo', TRUE, 33, 3, 2);