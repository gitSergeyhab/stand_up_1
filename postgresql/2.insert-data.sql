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


INSERT INTO users (user_email, user_password, user_nik, status_id, country_id, user_city) VALUES
    ('e@m.com', 'p1', 'admin', 1, 3, 'Mordor'),
    ('em@m.com', 'p12', 'user1', 2, 1, 'City1'),
    ('ejdj@m.com', 'p123', 'misha', 2, 3, 'City12'),
    ('eslskj@m.com', 'p144', 'xuha', 2, 3, 'City123');

INSERT INTO users (
    user_email, user_password, user_nik, user_first_name, user_last_name, 
    status_id, country_id, user_city, user_avatar, user_date_birth, user_description) VALUES
    ('eqqwww@m.com', 'p1', 'full', 'full', '1111', 2, 1, 'New Mordor1', '/avatars/user_avatar1/', '1917-01-01', 'it is description'),
    ('full@m.com', 'p123', 'full2', '2full', '222-last', 2, 1, 'New Mordor2', '/avatars/user_avatar2/', '1977-07-07', 'it is description1');


INSERT INTO comedians(
    comedian_first_name, comedian_last_name, country_id, comedian_city, comedian_avatar, comedian_date_birth
) VALUES 
('Слава', 'Комиссаренко', 1, 'Минск', '/avatars/comedian/comedian_avatar/s-komisarenko.jpeg', '1985-07-27'),
('Дмитрий', 'Романов', 2, 'Одесса', '/avatars/comedian/comedian_avatar/d-romanov.jpeg', '1985-01-08');

INSERT INTO comedians(
    comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en, 
    country_id, comedian_city, comedian_avatar, comedian_date_birth, comedian_description
) VALUES 
('Идрак', 'Мирзализаде', 'Idrak', 'Mirzalizade', 3, '', '/avatars/comedian/comedian_avatar/idrak.jpeg', '1985-01-08', 'cd'),
('Денис', 'Чужой', 'Denis', 'Chuzhoy', 2, '', '/avatars/comedian/comedian_avatar/Chuzhoy.jpeg', '1988-07-23', 'iam verygood');


INSERT INTO places(place_name, country_id, place_city, user_added_id, place_promo_picture, place_description) VALUES
('SUPER-CLUB', 1, 'Tula', 2, '/pics/place/promo/tula.jpeg', 'very nice');
INSERT INTO places(place_name, country_id, place_city, user_added_id, place_promo_picture, place_description) VALUES
('SUPER-Moskow-CLUB', 1, 'Moskow', 3, '/pics/place/promo/Moskow.jpeg', 'burn this place'),
('SPB-CLUB', 1, 'St Peterburg', 3, '/pics/place/promo/SPB.jpeg', 'hate this place'),
('LONDON-CLUB', 2, 'London', 1, '/pics/place/promo/LONDON.jpeg', 'fuck this place');

INSERT INTO resources(resource_type_id, user_id, resource_href) VALUES 
(2, 2, 'https://vk.com/vk-1'),
(3, 2, 'https://instagram.com/ig-1'),
(2, 3, 'https://vk.com/vk-3'),
(3, 3, 'https://instagram.com/ig-3');

INSERT INTO resources(resource_type_id, place_id, resource_href) VALUES 
(2, 1, 'https://vk.com/vk-1'),
(3, 1, 'https://instagram.com/ig-1');

INSERT INTO resources(resource_type_id, comedian_id, resource_href) VALUES 
(2, 1, 'https://vk.com/vk-1'),
(2, 2, 'https://vk.com/vk-1'),
(3, 2, 'https://instagram.com/ig-1');

INSERT INTO pictures(user_id, picture_path) VALUES 
(2, '/pic/user/avatar/user-2.jpg'),
(3, '/pic/user/avatar/user-3.jpg');

INSERT INTO pictures(comedian_id, picture_path) VALUES 
(2, '/pic/comedian/avatar/ca1-2.jpg'),
(3, '/pic/comedian/pictures/ca2-3.jpg'),
(2, '/pic/comedian/avatar/com-22.jpg'),
(2, '/pic/comedian/avatar/com-223.jpg'),
(1, '/pic/comedian/avatar/com-223.jpg');

INSERT INTO pictures(place_id, picture_path) VALUES
(1, '/pic/place/pl-122.jpg'),
(1, '/pic/place/pl-1223.jpg'),
(1, '/pic/place/pl-1223.jpg');

INSERT INTO pictures(show_id, picture_path) VALUES
(1, '/pic/show/show-122.jpg'),
(1, '/pic/show/show-1223.jpg'),
(1, '/pic/show/show-1223.jpg'),
(2, '/pic/show/show-222.jpg'),
(3, '/pic/show/show-31223.jpg'),
(3, '/pic/show/show-31223.jpg');


INSERT INTO comedian_views(user_id, comedian_id) VALUES
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
	comedian_id, country_id, language_id, place_id, show_date, user_added_id, 
	show_name, show_description, show_poster, show_status_id
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

INSERT INTO show_videos(show_video_path, show_video_professional, show_minutes, show_id, user_id) VALUES 
('https://www.youtube.com/watch?v=vMK6_Wj7pl8', TRUE, 11, 1, 1),
('https://www.youtube.com/watch?v=8mfV4-e2KBk', TRUE, 22, 2, 1),
('https://www.youtube.com/watch?v=xT-IxupQJyo', TRUE, 33, 3, 2),
('https://www.youtube.com/watch?v=vMK6_Wj7pl8', TRUE, 11, 1, 1),
('https://www.youtube.com/watch?v=8mfV4-e2KBk', TRUE, 22, 1, 1),
('https://www.youtube.com/watch?v=xT-IxupQJyo', TRUE, 33, 2, 2);

INSERT INTO comedian_ratings (user_id, comedian_id, comedian_rate) VALUES 
(1, 1, 10),
(1, 2, 8),
(1, 3, 10),
(1, 4, 6),
(2, 1, 5),
(2, 2, 3),
(2, 3, 2),
(2, 4, 1),
(3, 1, 7),
(3, 2, 8),
(3, 3, 8),
(4, 1, 10),
(4, 2, 9),
(4, 4, 8),
(5, 1, 10);

INSERT INTO show_ratings (user_id, show_id, show_rate) VALUES 
(1, 1, 9),
(1, 2, 8),
(1, 3, 7),
(1, 4, 6),
(2, 1, 6),
(2, 2, 3),
(2, 3, 6),
(2, 4, 1),
(3, 1, 9),
(3, 2, 9),
(3, 3, 6),
(4, 1, 8),
(4, 2, 9),
(4, 4, 8),
(5, 1, 10),
(6, 4, 5);

INSERT INTO comedian_views (user_id, comedian_id) VALUES 
    (1,2), (1,2), (2,2), (1,1), (3,1), (1,1), (3,2), (4,2), (4,4), (1,1), (1,2), (1,3);

INSERT INTO show_views (user_id, show_id) VALUES 
	(1,2), (1,2), (2,2), (1,1), (3,1), (1,1), (3,2), (4,2), (4,4), (1,1), (1,2), (1,3),
	(2,1), (2,2), (2,1), (2,2), (3,1), (1,1), (2,3), (2,4), (1,1), (1,1), (4,2), (4,3);

INSERT INTO place_views (user_id, place_id) VALUES 
	(1,3), (1,3), (2,3), (1,2), (3,2), (1,2), (3,3), (4,3), (4,1), (1,2), (1,3), (1,4),
	(3,1), (3,2), (3,1), (3,2), (4,1), (2,1), (3,3), (3,4), (2,1), (2,1), (1,2), (1,3);


INSERT INTO reviews(user_id, show_id, review_title, review_text) VALUES
(1, 1, 'first title', 'review_text1'),
(1, 2, ' title 2', 'review_text22'),
(1, 3, 'first title33', 'review_text1333'),
(1, 4, 'first title 4444', 'review_text1 44444'),
(2, 1, 'first title 5', 'review_text1 555  555 5'),
(2, 2, 'first title6', 'review_text1 6 66 666 6666'),
(2, 3, 'first 7', '777 review_text1'),
(2, 4, 'first 8', '88 8888 88 8888'),
(3, 1, 'first 9', '9'),
(3, 2, 'first 10', 'review_text1 10 10 10'),
(3, 3, 'first title 11', 'review_text1 11'),
(3, 4, 'first 12', 'review_text1 12'),
(4, 1, 'first title 13', 'review_text1 13 13 13'),
(4, 2, 'first 14', '14 14 14 14'),
(4, 3, 'first 15', 'review_text1 15'),
(4, 4, 'first 16', 'review_text 16 16 1');

INSERT INTO comedian_views(user_id, comedian_id, comedian_view_date) VALUES
(2, 2, '2022-01-11'),
(2, 3, '2022-01-21'),
(2, 4, '2022-01-02'),
(3, 2, '2022-01-21'),
(3, 2, '2022-02-01'),
(3, 2, '2022-02-11'),
(4, 3, '2022-02-21'),
(4, 1, '2022-03-01'),
(1, 1, '2022-04-01'),
(1, 1, '2022-04-03'),
(1, 1, '2022-04-04'),
(1, 1, '2022-05-06'),
(2, 1, '2022-05-04'),
(2, 1, '2022-07-07');

INSERT INTO show_views(user_id, show_id, show_view_date) VALUES
(2, 2, '2022-01-11'),
(2, 3, '2022-01-21'),
(2, 4, '2022-01-02'),
(3, 2, '2022-01-21'),
(3, 2, '2022-02-01'),
(3, 2, '2022-02-11'),
(4, 3, '2022-02-21'),
(2, 2, '2022-01-11'),
(2, 3, '2022-01-21'),
(2, 4, '2022-01-02'),
(3, 2, '2022-01-21'),
(3, 2, '2022-02-01'),
(3, 2, '2022-02-11'),
(4, 3, '2022-02-21'),
(4, 1, '2022-03-01'),
(1, 1, '2022-04-01'),
(1, 1, '2022-04-03'),
(1, 1, '2022-04-04'),
(1, 1, '2022-05-06'),
(2, 1, '2022-05-04'),
(2, 1, '2022-07-07');

INSERT INTO place_views(user_id, place_id, place_view_date) VALUES
(4, 1, '2022-03-01'),
(1, 1, '2022-04-01'),
(1, 1, '2022-04-03'),
(1, 1, '2022-04-04'),
(1, 1, '2022-05-06'),
(2, 1, '2022-05-04'),
(2, 1, '2022-07-07');