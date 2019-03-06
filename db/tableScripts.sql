-- Table: public.lmb_showplanning_song

CREATE TABLE public.lmb_showplanning_song
(
    song_id numeric(15,0) NOT NULL,
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
    user_id numeric(15, 0),
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