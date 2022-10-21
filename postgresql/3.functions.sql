-- STRING_AGG PICTURES AND RESOURCES

CREATE OR REPLACE FUNCTION get_str_user_resources() RETURNS TABLE(user_id integer, hrefs text, types text) AS $$
	SELECT
	user_id, STRING_AGG(resource_href, ' */* ') hrefs, STRING_AGG(resource_type_name, ' */* ') as types
	FROM resources
	LEFT JOIN resource_types USING (resource_type_id)
	WHERE user_id IS NOT NULL
	GROUP BY user_id
    ORDER BY user_id
$$ LANGUAGE SQL;


CREATE OR REPLACE FUNCTION get_str_place_resources() RETURNS TABLE(place_id integer, hrefs text, types text) AS $$
	SELECT
	place_id, STRING_AGG(resource_href, ' */* ') hrefs, STRING_AGG(resource_type_name, ' */* ') as types
	FROM resources
	LEFT JOIN resource_types USING (resource_type_id)
	WHERE place_id IS NOT NULL
	GROUP BY place_id
    ORDER BY place_id
$$ LANGUAGE SQL;


CREATE OR REPLACE FUNCTION get_str_comedian_resources() RETURNS TABLE(comedian_id integer, hrefs text, types text) AS $$
	SELECT
	comedian_id, STRING_AGG(resource_href, ' */* ') hrefs, STRING_AGG(resource_type_name, ' */* ') as types
	FROM resources
	LEFT JOIN resource_types USING (resource_type_id)
	WHERE comedian_id IS NOT NULL
	GROUP BY comedian_id
	ORDER BY comedian_id
$$ LANGUAGE SQL;



CREATE OR REPLACE FUNCTION get_str_comedian_pictures() RETURNS TABLE(comedian_id integer, picture_paths text) AS $$
	SELECT
	comedian_id, STRING_AGG(picture_path, ' */* ') picture_paths
	FROM pictures
	WHERE comedian_id IS NOT NULL
	GROUP BY comedian_id
	ORDER BY comedian_id
$$ LANGUAGE SQL;


CREATE OR REPLACE FUNCTION get_str_show_pictures() RETURNS TABLE(show_id bigint, picture_paths text) AS $$
	SELECT
	show_id, STRING_AGG(picture_path, ' */* ') picture_paths
	FROM pictures
	WHERE show_id IS NOT NULL
	GROUP BY show_id
	ORDER BY show_id
$$ LANGUAGE SQL;


CREATE OR REPLACE FUNCTION get_str_user_pictures() RETURNS TABLE(user_id int, picture_paths text) AS $$
	SELECT
	user_id, STRING_AGG(picture_path, ' */* ') picture_paths
	FROM pictures
	WHERE user_id IS NOT NULL
	GROUP BY user_id
	ORDER BY user_id
$$ LANGUAGE SQL;


CREATE OR REPLACE FUNCTION get_str_place_pictures() RETURNS TABLE(place_id int, picture_paths text) AS $$
	SELECT
	place_id, STRING_AGG(picture_path, ' */* ') picture_paths
	FROM pictures
	WHERE place_id IS NOT NULL
	GROUP BY place_id
	ORDER BY place_id
$$ LANGUAGE SQL;


-- ... and videos
CREATE OR REPLACE FUNCTION get_str_show_videos() 
RETURNS TABLE(show_id bigint, video_paths text, is_pro text, minutes text, user_ids text, user_niks text) AS $$
	SELECT
	show_id, 
	STRING_AGG(show_video_path, ' */* ') video_paths, 
	STRING_AGG(CASE  WHEN show_video_professional THEN '1' ELSE '0' END  || '', ' */* ') as is_pro, 
	STRING_AGG(show_minutes || '' , ' */* ') as minutes,
	STRING_AGG(users.user_id || '', ' */* ') AS user_ids, 
	STRING_AGG(users.user_nik, ' */* ') AS user_niks
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