SELECT 
	user_id, status_id,
	user_email, user_password, user_nik, user_first_name, user_last_name, user_city, user_avatar, user_date_birth, user_description, user_date_registration,
	country_id, country_name, country_name_en
	review_id, reviews.show_id, review_title, review_text, review_date_updated
-- 	comedian_id, comedian_rate, comedian_date_rate
-- 	show_id, show_rate, show_date_rate,
-- 	picture_path,
-- 	resource_type_id, resource_href,
-- 	comedian_views.comedian_id, comedian_view_date,
-- 	show_views.show_id, show_view_date
FROM users
LEFT JOIN countries USING(country_id)
LEFT JOIN reviews USING(user_id)
-- LEFT JOIN comedian_ratings USING(user_id)
-- LEFT JOIN show_ratings USING(user_id)
-- LEFT JOIN pictures USING(user_id)
-- LEFT JOIN resources USING(user_id)
-- LEFT JOIN comedian_views USING(user_id)
-- LEFT JOIN show_views USING(user_id)
WHERE user_id = 2
