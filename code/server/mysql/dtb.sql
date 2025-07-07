drop database if exists my_db;
create database my_db;
use my_db;

drop table if exists users;

create table users (
    id int primary key auto_increment,
    email varchar(255) not null unique,
    password varchar(255) not null
);

create table todo (
    id int primary key auto_increment,
    title varchar(255) not null,
    description text not null,
    completed boolean not null default false,
    created_at datetime not null default current_timestamp,
    updated_at datetime not null default current_timestamp on update current_timestamp,
    user_id int not null,
    foreign key (user_id) references users(id)
);

insert into users (email, password) values ('john@doe.com', '123456');
insert into todo (title, description, completed, created_at, updated_at, user_id) values ('Buy groceries', 'Buy groceries for the week', false, now(), now(), 1);
insert into todo (title, description, completed, created_at, updated_at, user_id) values ('Finish project', 'Finish the project for the week', false, now(), now(), 1);
insert into todo (title, description, completed, created_at, updated_at, user_id) values ('Call mom', 'Call mom to wish her happy birthday', false, now(), now(), 1);





