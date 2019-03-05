-- Table: public.lmb_showplanning_song

-- DROP TABLE public.lmb_showplanning_song;

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