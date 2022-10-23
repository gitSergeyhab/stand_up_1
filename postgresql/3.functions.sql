CREATE OR REPLACE FUNCTION get_review_user_data(user_idx int, lim int) RETURNS JSON AS $$
	SELECT 
		JSON_AGG(JSON_BUILD_OBJECT(
			'review_id', review_id,
			'show_id', show_id,
			'title', review_title,
			'text', review_text,
			'review_date', review_date_updated	
		))
	FROM (SELECT * FROM reviews WHERE user_id = user_idx ORDER BY review_date_updated DESC LIMIT lim) AS rvws
$$ LANGUAGE SQL;


-- STRING_AGG PICTURES AND RESOURCES

CREATE OR REPLACE FUNCTION get_user_resource(user_idx INT) 
RETURNS JSON AS $$
	SELECT 
	JSON_AGG(JSON_BUILD_OBJECT('type', resource_type_id, 'href', resource_href))
	FROM resources 
	WHERE user_id = user_idx
$$ LANGUAGE SQL

--
CREATE OR REPLACE FUNCTION get_place_resource(place_idx INT) 
RETURNS JSON AS $$
	SELECT 
	JSON_AGG(JSON_BUILD_OBJECT('type', resource_type_id, 'href', resource_href))
	FROM resources 
	WHERE place_id = place_idx
$$ LANGUAGE SQL

--


CREATE OR REPLACE FUNCTION get_comedian_resource(comedian_idx INT) 
RETURNS JSON AS $$
	SELECT 
	JSON_AGG(JSON_BUILD_OBJECT('type', resource_type_id, 'href', resource_href))
	FROM resources 
	WHERE comedian_id = comedian_idx
$$ LANGUAGE SQL

--



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