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

INSERT INTO resource_types(resource_type_name) VALUES 
('Site'), ('Facebook'), ('YouTube'), ('WhatsApp'), ('Instagram'), ('VKontakte'), ('Telegram');


INSERT INTO users (user_email, user_password, user_nik, user_status, country_id, user_city) VALUES
    ('e@m.com', 'p1', 'admin', 'ADMIN', 3, 'Mordor'),
    ('em@m.com', 'p12', 'user1', 'PRO-USER', 1, 'City1'),
    ('ejdj@m.com', 'p123', 'misha', 'USER', 3, 'City12'),
    ('eslskj@m.com', 'p144', 'xuha', 'USER', 3, 'City123');

INSERT INTO users (
    user_email, user_password, user_nik, user_first_name, user_last_name, 
    country_id, user_city, user_avatar, user_date_birth, user_description) VALUES
    ('eqqwww@m.com', 'p1', 'full', 'full', '1111',  1, 'New Mordor1', '/img/test/abr.jpg', '1917-01-01', 'it is description'),
    ('full@m.com', 'p123', 'full2', '2full', '222-last',  1, 'New Mordor2', '/img/test/d-r.jpeg', '1977-07-07', 'it is description1');


INSERT INTO comedians(
    comedian_first_name, comedian_last_name, country_id, comedian_city, comedian_avatar, comedian_date_birth
) VALUES 
('Слава', 'Комиссаренко', 1, 'Минск', '/img/test/xz.jpg', '1985-07-27'),
('Дмитрий', 'Романов', 2, 'Одесса', '/img/test/girl.webp', '1985-01-08');

INSERT INTO comedians(
    comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en, 
    country_id, comedian_city, comedian_avatar, comedian_date_birth, comedian_description
) VALUES 
('Идрак', 'Мирзализаде', 'Idrak', 'Mirzalizade', 3, '', '/img/test/girl.webp', '1985-01-08', 'cd'),
('Денис', 'Чужой', 'Denis', 'Chuzhoy', 2, '', '/img/test/abr.jpg', '1988-07-23', 'iam verygood');

INSERT INTO comedians(comedian_first_name) VALUES ('Test');


INSERT INTO places(place_name, country_id, place_city, user_added_id, place_promo_picture, place_description) VALUES
('SUPER-CLUB', 1, 'Tula', 2, '/img/test/xz.jpg', 'very nice');
INSERT INTO places(place_name, country_id, place_city, user_added_id, place_promo_picture, place_description) VALUES
('SUPER-Moskow-CLUB', 1, 'Moskow', 3, '/img/test/girl.webp', 'burn this place'),
('SPB-CLUB', 1, 'St Peterburg', 3, '/img/test/kom.jpg', 'hate this place'),
('LONDON-CLUB', 2, 'London', 1, '/img/test/white.jpg', 'fuck this place');

INSERT INTO places(place_name) VALUES('The Test Place');

INSERT INTO resources(resource_type_id, user_id, resource_href) VALUES 
(2, 2, 'https://vk.com/vk-1'),
(3, 2, 'https://instagram.com/ig-1'),
(2, 3, 'https://vk.com/vk-3'),
(3, 3, 'https://instagram.com/ig-3');

INSERT INTO resources(resource_type_id, place_id, resource_href) VALUES 
(2, 1, 'https://vk.com/vk-1'),
(3, 1, 'https://instagram.com/ig-1');

INSERT INTO resources(resource_type_id, comedian_id, resource_href) VALUES 
(1, 1, 'https://site-1.com'),
(2, 1, 'https://Facebook.com/fb-1'),
(3, 1, 'https://YouTube.com/yt-1'),
(4, 1, 'https://wa.me/79051155011'),
(5, 1, 'https://instagram.com/ig-1'),
(6, 1, 'https://vk.com/ig-1'),
(7, 1, 'https://t.me/+79274238608'),
(1, 2, 'https://site-2.com'),
(2, 2, 'https://Facebook.com/fb-2'),
(3, 2, 'https://YouTube.com/yt-2'),
(2, 3, 'https://Facebook.com/fb-3'),
(3, 3, 'https://YouTube.com/yt-3');


INSERT INTO events (place_id, user_id, event_name, event_description, event_date, event_status, event_promo_picture ) VALUES
(1,1, 'First Event', 'First Event event_discription', '01.01.2023', 'planned', '/img/test/girl.webp'),
(2,1, 'Second Event', 'Second Second Event event_discription', '01.02.2023', 'planned', '/img/test/kom.jpg'),
(2,1, 'Third Event', 'Third Third Third Event event_discription', '01.01.2022', 'ended', '/img/test/d-r.jpeg'),
(3,2, 'Event 4', '444444444 event_discription', '01.02.2022', 'ended', '/img/test/abr.jpg'),
(3,3, 'Event 55', '55 55 55 55 event_discription', '01.03.2022', 'canceled', '/img/test/d-r.jpeg'),
(3,3, 'Event 666', '666 666 666', '04.01.2023', 'planned', '/img/test/kom.jpg');

INSERT INTO events (place_id, user_id, event_name, event_description, event_date, event_status, event_promo_picture ) VALUES
(1,1, 'First Event1', 'First Event event_discription', '01.01.2021', 'ended', '/img/test/abr.jpg'),
(2,1, 'Second Event1', 'Second Second Event event_discription', '01.02.2021', 'ended', '/img/test/black.jpg'),
(2,1, 'Third Event1', 'Third Third Third Event event_discription', '01.01.2020', 'ended', '/img/test/white.jpg'),
(3,2, 'Event 41', '444444444 event_discription', '01.02.2020', 'ended', '/img/test/white.jpg'),
(3,3, 'Event 551', '55 55 55 55 event_discription', '01.03.2019', 'ended', '/img/test/black.jpg'),
(3,3, 'Event 6661', '666 666 666', '04.01.2018', 'ended', '/img/test/abr.jpg');


INSERT INTO events (place_id, user_id, event_name, event_description, event_date, event_status, event_promo_picture ) VALUES
(4,1, 'First Event --11', 'First Event event_discription--11', '03.01.2023', 'planned', '/img/test/girl.webp'),
(3,1, 'Second Event --12', 'Second Second Event event_discription', '06.06.2023', 'planned', '/img/test/kom.jpg'),
(2,1, 'Third Event --13', 'Third Third Third Event event_discription', '01.09.2024', 'planned', '/img/test/d-r.jpeg'),
(1,1, 'Event --14', '444444444 event_discription', '01.02.2024', 'planned', '/img/test/abr.jpg'),
(3,2, 'Event --155', '55 55 55 55 event_discription', '01.03.2024', 'planned', '/img/test/d-r.jpeg'),
(3,2, 'Event --1666', '666 666 666', '04.01.2025', 'planned', '/img/test/kom.jpg');

INSERT INTO events (place_id, user_id, event_name, event_description, event_date, event_status, event_promo_picture ) VALUES
(1,1, 'First Event1', 'First Event event_discription', '01.05.2021', 'ended', '/img/test/abr.jpg'),
(2,1, 'Second Event1', 'Second Second Event event_discription', '01.04.2020', 'ended', '/img/test/black.jpg'),
(2,1, 'Third Event1', 'Third Third Third Event event_discription', '01.11.2019', 'ended', '/img/test/white.jpg'),
(3,1, 'Event 41', '444444444 event_discription', '01.02.2021', 'canceled', '/img/test/white.jpg'),
(3,3, 'Event 551', '55 55 55 55 event_discription', '01.03.2022', 'canceled', '/img/test/black.jpg'),
(3,3, 'Event 6661', '666 666 666', '04.04.2018', 'canceled', '/img/test/abr.jpg');


INSERT INTO shows(
	comedian_id, country_id, language_id, place_id, show_date, user_added_id, 
	show_name, show_description, show_poster, event_id
) VALUES 
(1, 1, 8, 1, '2022-01-01', 1, 
 'Спасибо, у меня всё #10', 
 'Десятый выпуск шоу «Спасибо, у меня всё» из Варшавы', 
 '/img/test/kom.jpg', 1),

(1, 3, 8, 1, '2022-01-21', 2, 
 'Меня ищет КГБ', 
 'А у вас как дела, ребята ?) ', 
 '/img/test/kom.jpg', 2),
 
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
 '/img/test/d-r.jpeg', NULL),
 
 (2, 2, 8, 1, '2022-01-23', 2, 
 'Скоро будет', 
 'или не будет', 
 '/img/test/girl.webp', NULL);

INSERT INTO shows(event_id, user_added_id, comedian_id, language_id, show_date, show_name, show_description, show_poster) VALUES
(1, 1, 2, 1, '2022-10-30', 'SHOW #5', 'show_description 5', '/img/test/black.jpg'),
(1, 2, 3, 1, '2022-11-03', 'SHOW #6', 'show_description 666', '/img/test/xz.jpg'),
(1, 1, 4, 1, '2022-11-30', 'SHOW #7', 'show_description 577', '/img/test/girl.webp'),
(2, 2, 1, 1, '2022-11-13', 'SHOW #8', 'show_description 666 888', '/img/test/d-r.jpeg');

INSERT INTO shows(event_id, user_added_id, comedian_id, language_id, show_date, show_name, show_description, show_poster, show_date_added) VALUES
(1, 1, 2, 1, '2020-10-30', 'SHOW #9', 'show_description 995 asdfg', '/img/test/black.jpg', '2022-10-30'),
(1, 2, 3, 1, '2020-11-03', 'SHOW #10', 'show_description 10666 dfgfdsdf', '/img/test/xz.jpg', '2022-11-10'),
(1, 1, 4, 1, '2021-11-30', 'SHOW #11', 'show_description 11577 df fghj', '/img/test/girl.webp', '2019-12-20'),
(2, 2, 1, 1, '2021-11-13', 'SHOW #12', 'show_description 12666 888 dsdfsdsd', '/img/test/d-r.jpeg', '2018-01-10'),
(1, 1, 2, 1, '2022-10-30', 'SHOW #13', 'show_description 135 sdf', '/img/test/black.jpg', '2019-02-11'),
(1, 2, 3, 1, '2022-11-03', 'SHOW #14', 'show_description 14666 s', '/img/test/xz.jpg', '2020-03-22'),
(1, 1, 4, 1, '2020-11-30', 'SHOW #15', 'show_description 15577', '/img/test/girl.webp', '2021-04-01'),
(2, 2, 1, 1, '2021-11-13', 'SHOW #16', 'show_description 16666 888', '/img/test/d-r.jpeg', '2022-05-02'),
(1, 1, 2, 1, '2019-10-30', 'SHOW #17', 'show_description 175', '/img/test/black.jpg', '2020-06-03'),
(1, 2, 3, 1, '2018-11-03', 'SHOW #18', 'show_description 18666', '/img/test/xz.jpg', '2019-07-30'),
(1, 1, 4, 1, '2017-11-30', 'SHOW #19', 'show_description 19577', '/img/test/girl.webp', '2021-11-30'),
(2, 2, 1, 1, '2016-11-13', 'SHOW #20', 'show_description 20666 888', '/img/test/d-r.jpeg', '2017-11-30');


INSERT INTO shows(user_added_id, comedian_id, language_id, show_date, show_name, show_description, show_poster, show_date_added) VALUES
(1, 2, 1, '2020-09-30', 'SHOW #21', 'show_description 995 asdfg', '/img/test/black.jpg', '2021-10-30'),
(2, 3, 1, '2020-08-03', 'SHOW #22', 'show_description 10666 dfgfdsdf', '/img/test/xz.jpg', '2020-11-10'),
(1, 4, 1, '2021-07-30', 'SHOW #23', 'show_description 11577 df fghj', '/img/test/girl.webp', '2018-12-20');
 
INSERT INTO pictures(show_id, picture_path) VALUES
(1, '/img/test/black.jpg'),
(1, '/img/test/xz.jpg'),
(1, '/img/test/girl.webp'),
(2, '/img/test/d-r.jpeg'),
(3, '/img/test/black.jpg'),
(3, '/img/test/white.jpg');

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




INSERT INTO comedians_events VALUES
(1,1), 
(1,2), 
(1,3), 
(1,4), 
(1,6), 
(2,1), 
(3,1), 
(3,5), 
(3,2), 
(4,1), 
(4,2); 

INSERT INTO comedians_events VALUES
(1,7), 
(1,8), 
(1,9), 
(1,10), 
(1,11), 
(2,12), 
(3,7), 
(3,10), 
(3,9), 
(4,8), 
(4,7); 

INSERT INTO comedians_events VALUES
(1,13), 
(1,14), 
(1,15), 
(1,16), 
(1,17), 
(1,18), 
(4,19), 
(2,20), 
(3,19), 
(4,18), 
(4,24), 
(1,19), 
(1,20), 
(1,21), 
(1,22), 
(2,14), 
(3,24), 
(4,23),
(2,22); 

INSERT INTO resources(resource_type_id, event_id, resource_href) VALUES 
(2, 1, 'https://vk.com/vk-ev-1'),
(3, 1, 'https://instagram.com/ig-ev-1'),
(1, 1, 'https://site-event-1.com'),
(1, 2, 'https://site-event-2.com'),
(3, 2, 'https://instagram.com/ig-ev-2');



INSERT INTO views(user_watched_id, comedian_id, view_date) VALUES
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

INSERT INTO views(user_watched_id, show_id, view_date) VALUES
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

INSERT INTO views(user_watched_id, place_id, view_date) VALUES
(4, 2, '2022-03-01'),
(1, 2, '2022-04-01'),
(1, 1, '2022-04-03'),
(1, 1, '2022-04-04'),
(1, 1, '2022-05-06'),
(2, 1, '2022-05-04'),
(2, 3, '2022-07-07');

INSERT INTO views(user_watched_id, user_id) VALUES
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

INSERT INTO views(user_watched_id, event_id) VALUES
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



INSERT INTO views(user_watched_id, comedian_id, view_date) VALUES
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

INSERT INTO views(user_watched_id, show_id, view_date) VALUES
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

INSERT INTO views(user_watched_id, place_id, view_date) VALUES
(4, 1, '2022-03-01'),
(1, 1, '2022-04-01'),
(1, 1, '2022-04-03'),
(1, 1, '2022-04-04'),
(1, 1, '2022-05-06'),
(2, 1, '2022-05-04'),
(2, 1, '2022-07-07');

INSERT INTO views(user_watched_id, user_id, view_date) VALUES
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

INSERT INTO views(user_watched_id, event_id, view_date) VALUES
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

INSERT INTO pictures (comedian_id, user_id, place_id, show_id, picture_path) VALUES 
(1,1,1,1, '/img/test/xz-2.jpg'),
(1,1,1,1, '/img/test/xz-2.jpg'),
(1,1,1,1, '/img/test/abr.jpg'),
(1,1,1,1, '/img/test/d-r.jpeg'),
(1,1,1,1, '/img/test/girl.webp');



INSERT INTO pictures(user_id, picture_path, user_added_id) VALUES 
(2, '/img/test/xz-2.jpg', 1),
(3, '/img/test/black.jpg', 2);

INSERT INTO pictures(comedian_id, picture_path, user_added_id) VALUES 
(2, '/img/test/xz-2.jpg', 1),
(3, '/img/test/black.jpg', 2),
(2, '/img/test/abr.jpg', 1),
(2, '/img/test/d-r.jpeg', 2),
(1, '/img/test/girl.webp', 3);

INSERT INTO pictures(place_id, picture_path, user_added_id) VALUES
(1, '/img/test/xz-2.jpg', 1),
(1, '/img/test/abr.jpg', 1),
(1, '/img/test/black.jpg', 1);

INSERT INTO pictures(event_id, picture_path, user_added_id) VALUES 
(2, '/img/test/xz-2.jpg', 1),
(3, '/img/test/black.jpg', 2),
(2, '/img/test/abr.jpg', 1),
(2, '/img/test/d-r.jpeg', 2),
(1, '/img/test/girl.webp', 3);

INSERT INTO pictures(show_id, picture_path, user_added_id) VALUES 
(2, '/img/test/xz-2.jpg', 1),
(3, '/img/test/black.jpg', 2),
(2, '/img/test/abr.jpg', 1),
(2, '/img/test/d-r.jpeg', 2),
(1, '/img/test/girl.webp', 3);