const user_setup = `CREATE TABLE public."user" (
	id bigserial NOT NULL,
	username varchar NOT NULL,
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (id),
	CONSTRAINT user_un UNIQUE (username,email)
);
`

const post_setup=`CREATE TABLE public.post (
	id bigserial NOT NULL,
	author bigint NOT NULL,
	title varchar NOT NULL,
	"content" varchar NULL,
	CONSTRAINT post_fk FOREIGN KEY (author) REFERENCES public."user"(id)
);
`