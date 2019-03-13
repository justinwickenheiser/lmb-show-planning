-- Table: public.lmb_showplanning_song

CREATE TABLE public.lmb_showplanning_song
(
    song_id SERIAL,
    title text COLLATE pg_catalog."default",
    arranger text COLLATE pg_catalog."default",
    song_length text COLLATE pg_catalog."default",
    audio text COLLATE pg_catalog."default",
    CONSTRAINT lmb_showplanning_song_pkey PRIMARY KEY (song_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.lmb_showplanning_song
    OWNER to lmbapp;



-- Table: public.lmb_showplanning_user
CREATE TABLE public.lmb_showplanning_user
(
    user_id SERIAL,
    username text,
    password text,
    PRIMARY KEY (user_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.lmb_showplanning_user
    OWNER to lmbapp;
COMMENT ON TABLE public.lmb_showplanning_user
    IS 'The user (admin) that can access restricted areas.';



-- Table: public.lmb_showplanning_show
CREATE TABLE public.lmb_showplanning_show
(
    show_id SERIAL,
    title text,
    details text,
    season text,
    show_number text,
    date text,
    PRIMARY KEY (show_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.lmb_showplanning_show
    OWNER to lmbapp;


-- Table: public.lmb_showplanning_showsong
CREATE TABLE public.lmb_showplanning_showsong
(
    show_song_id SERIAL,
    show_id numeric(15, 0),
    song_id numeric(15, 0),
    PRIMARY KEY (show_song_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.lmb_showplanning_showsong
    OWNER to lmbapp;
COMMENT ON TABLE public.lmb_showplanning_showsong
    IS 'Join table between shows and songs';