CREATE TABLE statuses (
    status_id SMALLSERIAL PRIMARY KEY,
    status_name VARCHAR(32)
);

CREATE TABLE languages (
    language_id SMALLSERIAL PRIMARY KEY,
    language_name VARCHAR(64),
    language_name_en VARCHAR(64)
);

CREATE TABLE countries ( 
    country_id SERIAL PRIMARY KEY,
    country_name VARCHAR(64),
    country_name_en VARCHAR(64)
    );



CREATE TABLE users ( 
    user_id SERIAL PRIMARY KEY, 
    user_email VARCHAR(128) UNIQUE,
    user_password VARCHAR(512) NOT NULL,
    user_nik VARCHAR(32) NOT NULL,
    fk_status_id SMALLINT REFERENCES statuses (status_id), 
    user_first_name VARCHAR(64),
    user_last_name VARCHAR(64),
    fk_country_id INTEGER REFERENCES countries(country_id),
    user_city VARCHAR(256),
    user_avatar VARCHAR(128),
    user_date_birth DATE,
    user_date_registration DATE DEFAULT CURRENT_DATE,
    description TEXT
    );

CREATE TABLE user_stats ( 
    user_stat_id SERIAL PRIMARY KEY,
    fk_user_id INTEGER NOT NULL REFERENCES users(user_id),
    user_comedian_stats REAL,
    user_show_stats REAL
    );

CREATE TABLE comedians ( 
    comedian_id SERIAL PRIMARY KEY, 
    comedian_first_name VARCHAR(64) NOT NULL,
    comedian_last_name VARCHAR(64) NOT NULL,
    comedian_first_name_en VARCHAR(64),
    comedian_last_name_en VARCHAR(64),
    fk_country_id INTEGER REFERENCES countries(country_id),
    comedian_city VARCHAR(256),
    comedian_city_en VARCHAR(256),
    comedian_avatar VARCHAR(128),
    comedian_date_birth DATE,
    comedian_date_death DATE,
    comedian_date_added DATE DEFAULT CURRENT_DATE,
    fk_user_added_id INTEGER REFERENCES users(user_id),
    average_comedian_rating REAL,
    number_comedian_rating INTEGER,
    number_day_viewing INTEGER,
    number_week_viewing INTEGER,
    number_month_viewing INTEGER,
    number_viewing BIGINT,
    description TEXT
    );

CREATE TABLE places ( 
    place_id SERIAL PRIMARY KEY, 
    place_name VARCHAR(256),
    place_name_en VARCHAR(256),
    fk_country_id INTEGER REFERENCES countries(country_id),
    place_city VARCHAR(256),
    place_city_en VARCHAR(256),
    date_place_founded DATE,
    date_place_added DATE DEFAULT CURRENT_DATE,
    fk_user_added_id INTEGER REFERENCES users(user_id),
    description TEXT
    );

CREATE TABLE shows ( 
    show_id BIGSERIAL PRIMARY KEY, 
    fk_comedian_id INTEGER NOT NULL REFERENCES comedians(comedian_id),
    fk_country_id INTEGER REFERENCES countries(country_id),
    fk_language_id INTEGER NOT NULL REFERENCES languages(language_id),
    fk_place_id INTEGER REFERENCES places(place_id),
    city VARCHAR(256),
    show_date DATE,
    show_date_added DATE DEFAULT CURRENT_DATE,
    fk_user_added_id INTEGER REFERENCES users(user_id),
    show_name VARCHAR(256),
    description TEXT,
    average_show_rating REAL,
    number_show_rating INTEGER
    );



CREATE TABLE reviews ( 
    review_id BIGSERIAL PRIMARY KEY, 
    review_title VARCHAR(256),
    text TEXT,
    date_review_added TIMESTAMP with time zone DEFAULT CURRENT_TIMESTAMP,
    date_review_updated TIMESTAMP with time zone DEFAULT CURRENT_TIMESTAMP,
    fk_user_id INTEGER NOT NULL REFERENCES users(user_id),
    fk_show_id INTEGER NOT NULL REFERENCES shows(show_id)
    );

CREATE TABLE tag_names (
    tag_name_id SERIAL PRIMARY KEY,
    tag_name VARCHAR(32) NOT NULL,
    fk_user_id INTEGER REFERENCES users(user_id),
    tag_name_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE tags ( 
    tag_id BIGSERIAL PRIMARY KEY,
    fk_tag_name_id INTEGER NOT NULL REFERENCES tag_names(tag_name_id),
    fk_tag_user_id INTEGER REFERENCES users(user_id),
    tag_date DATE DEFAULT CURRENT_DATE
    );

CREATE TABLE comedian_ratings ( 
    comedian_rating_id BIGSERIAL PRIMARY KEY,
    fk_user_id INTEGER NOT NULL REFERENCES users(user_id),
    fk_comedian_id INTEGER NOT NULL REFERENCES comedians(comedian_id),
    date_rate DATE DEFAULT CURRENT_DATE
    );

CREATE TABLE show_ratings ( 
    show_rating_id BIGSERIAL PRIMARY KEY,
    fk_user_id INTEGER NOT NULL REFERENCES users(user_id),
    fk_show_id INTEGER NOT NULL REFERENCES shows(show_id),
    date_rate DATE DEFAULT CURRENT_DATE
    );

CREATE TABLE resource_types (
    resource_type_id SMALLSERIAL PRIMARY KEY,
    resource_type_name VARCHAR(32) DEFAULT 'WEB_SITE'
);

CREATE TABLE pictures (
    picture_id SERIAL PRIMARY KEY,
    fk_user_id INTEGER REFERENCES users(user_id),
    fk_comedian_id INTEGER REFERENCES comedians(comedian_id),
    fk_place_id INTEGER REFERENCES places(place_id),
    picture_path VARCHAR(256) NOT NULL
);

CREATE TABLE resources (
    resource_id SERIAL PRIMARY KEY,
    fk_resource_type_id INTEGER NOT NULL REFERENCES resource_types(resource_type_id),
    fk_user_id INTEGER REFERENCES users(user_id),
    fk_comedian_id  INTEGER REFERENCES comedians(comedian_id),
    fk_place_id INTEGER REFERENCES places(place_id),
    resource_href VARCHAR(256) NOT NULL
);

CREATE TABLE comedian_views (
    view_id BIGSERIAL PRIMARY KEY,
    fk_user_id INTEGER REFERENCES users(user_id),
    fk_comedian_id INTEGER NOT NULL REFERENCES comedians(comedian_id),
    view_date TIMESTAMP without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE show_views (
    view_id BIGSERIAL PRIMARY KEY,
    fk_user_id INTEGER REFERENCES users(user_id),
    fk_show_id INTEGER NOT NULL REFERENCES shows(show_id),
    view_date TIMESTAMP without time zone DEFAULT CURRENT_TIMESTAMP
);