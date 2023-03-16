create TABLE person
(
    id      serial primary key,
    name    varchar(255),
    surname varchar(255)
);

create TABLE post
(
    id      serial primary key,
    title    varchar(255),
    content varchar(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);
