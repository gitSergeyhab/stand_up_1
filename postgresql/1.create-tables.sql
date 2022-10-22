CREATE TABLE statuses (
    status_id SMALLINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    status_name VARCHAR(32)
);

CREATE TABLE languages (
    language_id SMALLINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    language_name VARCHAR(64),
    language_name_en VARCHAR(64)
);

CREATE TABLE countries ( 
    country_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    country_name VARCHAR(64),
    country_name_en VARCHAR(64)
    );



CREATE TABLE users ( 
    user_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    status_id SMALLINT REFERENCES statuses (status_id), 
    country_id INTEGER REFERENCES countries(country_id),


    user_email VARCHAR(128) UNIQUE,
    user_password VARCHAR(512) NOT NULL,
    user_nik VARCHAR(32) NOT NULL,
    user_first_name VARCHAR(64),
    user_last_name VARCHAR(64),
    user_city VARCHAR(256),
    user_avatar VARCHAR(128),
    user_date_birth DATE,
    user_description TEXT,
    user_date_registration DATE DEFAULT CURRENT_DATE
    );

CREATE TABLE user_stats ( 
    user_stat_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),

    user_comedian_stats REAL,
    user_show_stats REAL
    );

CREATE TABLE comedians ( 
    comedian_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    country_id INTEGER REFERENCES countries(country_id),
    user_added_id INTEGER REFERENCES users(user_id),

    comedian_first_name VARCHAR(64) NOT NULL,
    comedian_last_name VARCHAR(64) NOT NULL,
    comedian_first_name_en VARCHAR(64),
    comedian_last_name_en VARCHAR(64),
    comedian_city VARCHAR(256),
    comedian_city_en VARCHAR(256),
    comedian_avatar VARCHAR(128),
    comedian_date_birth DATE,
    comedian_date_death DATE,
    comedian_description TEXT,
    comedian_date_added DATE DEFAULT CURRENT_DATE
    );

CREATE TABLE places ( 
    place_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    country_id INTEGER REFERENCES countries(country_id),
    user_added_id INTEGER REFERENCES users(user_id),

    place_name VARCHAR(256),
    place_name_en VARCHAR(256),
    place_city VARCHAR(256),
    place_city_en VARCHAR(256),
    place_date_founded DATE,
    place_description TEXT,
    place_promo_picture VARCHAR(256),
    date_place_added DATE DEFAULT CURRENT_DATE
    );

CREATE TABLE show_statuses (
    show_status_id SMALLINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    show_status_name VARCHAR(32) DEFAULT 'completed'
);


CREATE TABLE shows ( 
    show_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_added_id INTEGER REFERENCES users(user_id),
    comedian_id INTEGER NOT NULL REFERENCES comedians(comedian_id),
    country_id INTEGER REFERENCES countries(country_id),
    language_id INTEGER NOT NULL REFERENCES languages(language_id),
    place_id INTEGER REFERENCES places(place_id),
    show_status_id SMALLINT REFERENCES show_statuses(show_status_id) DEFAULT 1,

    show_date DATE,
    show_name VARCHAR(256),
    show_description TEXT,
    show_poster VARCHAR(256),
    show_date_added DATE DEFAULT CURRENT_DATE
    );

CREATE TABLE show_videos (
    show_video_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    show_id BIGINT REFERENCES shows(show_id) NOT NULL,
    user_id INTEGER REFERENCES users(user_id),

    show_video_path VARCHAR(256),
    show_video_professional BOOLEAN DEFAULT FALSE,
    show_minutes SMALLINT
);



CREATE TABLE reviews ( 
    review_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    show_id INTEGER NOT NULL REFERENCES shows(show_id),

    review_title VARCHAR(256),
    review_text TEXT,
    review_date_added TIMESTAMP with time zone DEFAULT CURRENT_TIMESTAMP,
    review_date_updated TIMESTAMP with time zone DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE tag_names (
    tag_name_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),

    tag_name VARCHAR(32) NOT NULL,
    tag_name_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE tags ( 
    tag_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tag_name_id INTEGER NOT NULL REFERENCES tag_names(tag_name_id),
    tag_user_id INTEGER REFERENCES users(user_id),

    tag_date DATE DEFAULT CURRENT_DATE
    );

CREATE TABLE comedian_ratings ( 
    comedian_rating_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    comedian_id INTEGER NOT NULL REFERENCES comedians(comedian_id),

    comedian_rate SMALLINT CHECK (comedian_rate > 0 AND 11 > comedian_rate),
    comedian_date_rate DATE DEFAULT CURRENT_DATE
    );

CREATE TABLE show_ratings ( 
    show_rating_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    show_id INTEGER NOT NULL REFERENCES shows(show_id),

    show_rate SMALLINT CHECK (show_rate > 0 AND 11 > show_rate),
    show_date_rate DATE DEFAULT CURRENT_DATE
    );

CREATE TABLE resource_types (
    resource_type_id SMALLINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    resource_type_name VARCHAR(32) DEFAULT 'WEB_SITE'
);

CREATE TABLE pictures (
    picture_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    comedian_id INTEGER REFERENCES comedians(comedian_id),
    place_id INTEGER REFERENCES places(place_id),
    show_id BIGINT REFERENCES shows(show_id),

    picture_path VARCHAR(256) NOT NULL
);

CREATE TABLE resources (
    resource_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    resource_type_id INTEGER NOT NULL REFERENCES resource_types(resource_type_id),
    user_id INTEGER REFERENCES users(user_id),
    comedian_id  INTEGER REFERENCES comedians(comedian_id),
    place_id INTEGER REFERENCES places(place_id),

    resource_href VARCHAR(256) NOT NULL
);

CREATE TABLE comedian_views (
    comedian_view_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    comedian_id INTEGER NOT NULL REFERENCES comedians(comedian_id),

    comedian_view_date TIMESTAMP without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE show_views (
    show_view_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    show_id INTEGER NOT NULL REFERENCES shows(show_id),

    show_view_date TIMESTAMP without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE place_views (
    place_view_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    place_id INTEGER NOT NULL REFERENCES places(place_id),

    place_view_date TIMESTAMP without time zone DEFAULT CURRENT_TIMESTAMP
);



