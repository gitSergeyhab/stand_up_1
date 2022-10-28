CREATE OR REPLACE FUNCTION get_review_user_data(user_idx int, lim int) RETURNS JSON AS $$
	SELECT 
		JSON_AGG(JSON_BUILD_OBJECT(
			'review_id', review_id,
			'show_id', show_id,
			'title', review_title,
			'text', review_text,
			'review_date', review_date_updated,
			'show_name', show_name,
			'comedian_first_name', comedian_first_name,
			'comedian_first_name_en', comedian_first_name_en,
			'comedian_last_name', comedian_last_name,
			'comedian_last_name_en', comedian_last_name_en
		))
	FROM (
		SELECT 
		review_id, show_id, review_title, review_text, review_date_updated, 
		show_name, 
		comedian_first_name, comedian_first_name_en, comedian_last_name, comedian_last_name_en
		FROM reviews 
		LEFT JOIN shows USING (show_id)
		LEFT JOIN comedians USING (comedian_id)
		WHERE user_id = user_idx 
		ORDER BY review_date_updated DESC 
		LIMIT lim
	) AS rvws
$$ LANGUAGE SQL;


CREATE OR REPLACE FUNCTION get_show_ratings_user_data(user_idx int, lim int) RETURNS JSON AS $$
	SELECT 
		JSON_AGG(JSON_BUILD_OBJECT(
			'show_id', show_id,
			'show_rate', show_rate,
			'date_rate', show_date_rate,
			'show_name', show_name,
			'comedian_first_name', comedian_first_name,
			'comedian_first_name_en', comedian_first_name_en,
			'comedian_last_name', comedian_last_name,
			'comedian_last_name_en', comedian_last_name_en
		))
	FROM (
		SELECT
		show_id, show_rate, show_date_rate,
		show_name, 
		comedian_first_name, comedian_first_name_en, comedian_last_name, comedian_last_name_en
		FROM show_ratings
		LEFT JOIN shows USING (show_id)
		LEFT JOIN comedians USING (comedian_id)
		WHERE user_id = user_idx 
		ORDER BY show_date_rate DESC 
		LIMIT lim
	) AS t
$$ LANGUAGE SQL;


CREATE OR REPLACE FUNCTION get_comedian_ratings_user_data(user_idx int, lim int) RETURNS JSON AS $$
	SELECT 
		JSON_AGG(JSON_BUILD_OBJECT(
			'comedian_id', comedian_id,
			'comedian_rate', comedian_rate,
			'date_rate', comedian_date_rate, 
			'comedian_first_name', comedian_first_name,
			'comedian_first_name_en', comedian_first_name_en,
			'comedian_last_name', comedian_last_name,
			'comedian_last_name_en', comedian_last_name_en
		))
	FROM (
		SELECT
		comedian_id, comedian_rate, comedian_date_rate,
		comedian_first_name, comedian_first_name_en, comedian_last_name, comedian_last_name_en
		FROM comedian_ratings 
		LEFT JOIN comedians USING (comedian_id)
		WHERE user_id = user_idx 
		ORDER BY comedian_date_rate DESC 
		LIMIT lim
	) AS t
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION get_user_views_data(user_idx INT, lim INT) RETURNS JSON AS $$
SELECT JSON_AGG(JSON_BUILD_OBJECT(
	'view_id', view_id,
	'view_date', view_date,
	'picture', picture,
	'type', type
)) FROM (
	SELECT * FROM (
		(SELECT
		DISTINCT ON (show_id) show_id AS id,
		show_view_id AS view_id, 
		show_view_date AS view_date,
		user_id,
		show_poster AS picture,
		'shows' AS type
		FROM show_views
		LEFT JOIN shows USING(show_id)
		WHERE user_id = user_idx
		ORDER BY id, show_view_date DESC)
		UNION
		(SELECT
		DISTINCT ON (comedian_id) comedian_id AS id,
		comedian_view_id AS view_id, 
		comedian_view_date AS view_date,
		user_id,
		comedian_avatar AS picture,
		'comedians' AS type
		FROM comedian_views
		LEFT JOIN comedians USING (comedian_id)
		WHERE user_id = user_idx
		ORDER BY id, comedian_view_date DESC)
		UNION
		(SELECT 
		DISTINCT ON (place_id) place_id AS id,
		place_view_id AS view_id, 
		place_view_date AS view_date,
		user_id,
		place_promo_picture AS picture,
		'places' AS type
		FROM place_views 
		LEFT JOIN places USING (place_id)
		WHERE user_id = user_idx
		ORDER BY id, place_view_date DESC)
	) AS views
	ORDER BY view_date DESC
	LIMIT lim
) AS ten_views
$$ LANGUAGE SQL;


-- STRING_AGG PICTURES AND RESOURCES

CREATE OR REPLACE FUNCTION get_user_resource(user_idx INT) 
RETURNS JSON AS $$
	SELECT 
	JSON_AGG(JSON_BUILD_OBJECT('id', resource_id,  'type', resource_type_id, 'href', resource_href))
	FROM resources 
	WHERE user_id = user_idx
$$ LANGUAGE SQL;

--
CREATE OR REPLACE FUNCTION get_place_resource(place_idx INT) 
RETURNS JSON AS $$
	SELECT 
	JSON_AGG(JSON_BUILD_OBJECT('id', resource_id, 'type', resource_type_id, 'href', resource_href))
	FROM resources 
	WHERE place_id = place_idx
$$ LANGUAGE SQL;

--


CREATE OR REPLACE FUNCTION get_comedian_resource(comedian_idx INT) 
RETURNS JSON AS $$
	SELECT 
	JSON_AGG(JSON_BUILD_OBJECT('id', resource_id, 'type', resource_type_id, 'href', resource_href))
	FROM resources 
	WHERE comedian_id = comedian_idx
$$ LANGUAGE SQL;

--

CREATE OR REPLACE FUNCTION get_event_resource(event_idx INT) 
RETURNS JSON AS $$
	SELECT 
	JSON_AGG(JSON_BUILD_OBJECT('id', resource_id, 'type', resource_type_id, 'href', resource_href))
	FROM resources 
	WHERE event_id = event_idx
$$ LANGUAGE SQL;



CREATE OR REPLACE FUNCTION get_comedian_pictures() 
RETURNS TABLE(comedian_id INT, picture_paths VARCHAR(256)[]) AS $$
	SELECT
	comedian_id, ARRAY_AGG(picture_path) AS picture_paths
	FROM pictures
	WHERE comedian_id IS NOT NULL
	GROUP BY comedian_id
	ORDER BY comedian_id
$$ LANGUAGE SQL;


CREATE OR REPLACE FUNCTION get_show_pictures() 
RETURNS TABLE(show_id BIGINT, picture_paths VARCHAR(256)[]) AS $$
	SELECT
	show_id, ARRAY_AGG(picture_path) AS picture_paths
	FROM pictures
	WHERE show_id IS NOT NULL
	GROUP BY show_id
	ORDER BY show_id
$$ LANGUAGE SQL;


CREATE OR REPLACE FUNCTION get_user_pictures() 
RETURNS TABLE(user_id INT, picture_paths VARCHAR(256)[]) AS $$
	SELECT
	user_id, ARRAY_AGG(picture_path) AS picture_paths
	FROM pictures
	WHERE user_id IS NOT NULL
	GROUP BY user_id
	ORDER BY user_id
$$ LANGUAGE SQL;


CREATE OR REPLACE FUNCTION get_place_pictures()
RETURNS TABLE(place_id INT, picture_paths VARCHAR(256)[]) AS $$
	SELECT
	place_id, ARRAY_AGG(picture_path) AS picture_paths
	FROM pictures
	WHERE place_id IS NOT NULL
	GROUP BY place_id
	ORDER BY place_id
$$ LANGUAGE SQL;


-- ... and videos
CREATE OR REPLACE FUNCTION get_show_videos() 
RETURNS TABLE(show_id bigint, video_paths VARCHAR(256)[], is_pro BOOLEAN[], minutes SMALLINT[], user_ids INTEGER[], user_niks VARCHAR(32)[]) AS $$
	SELECT
	show_id, 
	ARRAY_AGG(show_video_path) AS video_paths, 
	ARRAY_AGG(show_video_professional ) AS is_pro, 
	ARRAY_AGG(show_minutes) AS minutes,
	ARRAY_AGG(users.user_id) AS user_ids, 
	ARRAY_AGG(users.user_nik) AS user_niks
	FROM show_videos
	LEFT JOIN users USING (user_id)
	GROUP BY show_id
	ORDER BY show_id;
$$ LANGUAGE SQL;




-- INSERT VIEWS

CREATE OR REPLACE FUNCTION insert_comedian_view (comedian_idx int, user_idx int) RETURNS void AS $$
	INSERT INTO comedian_views (comedian_id, user_id) VALUES (comedian_idx, user_idx);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION insert_show_view (show_idx int, user_idx int) RETURNS void AS $$
	INSERT INTO show_views (show_id, user_id) VALUES (show_idx, user_idx);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION insert_place_view (place_idx int, user_idx int) RETURNS void AS $$
	INSERT INTO place_views (place_id, user_id) VALUES (place_idx, user_idx);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION insert_event_view (event_idx int, user_idx int) RETURNS void AS $$
	INSERT INTO event_views (event_id, user_id) VALUES (event_idx, user_idx);
$$ LANGUAGE SQL;



-- number of views in the last x days

CREATE OR REPLACE FUNCTION get_count_of_comedian_views(comedian_idx int, days int) RETURNS bigint AS $$
	SELECT COUNT (*) FROM comedian_views
	WHERE EXTRACT( DAY FROM (NOW() - comedian_view_date) ) < days AND comedian_id = comedian_idx;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION get_count_of_show_views(show_idx bigint, days int) RETURNS bigint AS $$
	SELECT COUNT (*) FROM show_views
	WHERE EXTRACT( DAY FROM (NOW() - show_view_date) ) < days AND show_id = show_idx;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION get_count_of_place_views(place_idx int, days int) RETURNS bigint AS $$
	SELECT COUNT (*) FROM place_views
	WHERE EXTRACT( DAY FROM (NOW() - place_view_date) ) < days AND place_id = place_idx;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION get_count_of_event_views(event_idx int, days int) RETURNS bigint AS $$
	SELECT COUNT (*) FROM event_views
	WHERE EXTRACT( DAY FROM (NOW() - event_view_date) ) < days AND event_id = event_idx;
$$ LANGUAGE SQL;


-- for event-page
CREATE OR REPLACE FUNCTION get_event_comedians(event_idx INT) RETURNS JSON AS $$
	SELECT 
	JSON_AGG(JSON_BUILD_OBJECT(
		'comedian_id', comedian_id,
		'comedian_first_name', comedian_first_name,
		'comedian_last_name', comedian_last_name,
		'comedian_first_name_en', comedian_first_name_en,
		'comedian_last_name_en', comedian_last_name_en,
		'comedian_avatar', comedian_avatar,
		'avg_comedian_rate', avg_comedian_rate
	)) 
	FROM (
		SELECT 
		comedian_id, comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en, comedian_avatar,
		AVG (comedian_rate) as avg_comedian_rate, COUNT (comedian_rate) as num
		FROM events
		LEFT JOIN comedians_events USING (event_id)
		LEFT JOIN comedians USING (comedian_id)
		LEFT JOIN comedian_ratings USING (comedian_id)
		WHERE event_id = event_idx
		GROUP BY event_id, comedian_id, comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en, comedian_avatar
		ORDER BY num DESC
		LIMIT 10
	) as e
$$ LANGUAGE SQL


CREATE OR REPLACE FUNCTION get_event_shows(event_idx INT) RETURNS JSON AS $$
	SELECT 
	JSON_AGG(JSON_BUILD_OBJECT(
		'show_id', show_id,
		'show_name', show_name,
		'show_poster', show_poster,
		'avg_show_rate', avg_show_rate
	)) 
	FROM (
		SELECT 
		show_id, show_name, show_poster,
		AVG (show_rate) as avg_show_rate, COUNT (show_rate) as num
		FROM events
		JOIN shows USING (event_id)
		LEFT JOIN show_ratings USING (show_id)
		WHERE event_id = event_idx
		GROUP BY show_id, show_name, show_poster
		ORDER BY num DESC
		LIMIT 10
	) as e
$$ LANGUAGE SQL