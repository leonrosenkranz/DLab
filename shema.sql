create table ideas(
    idea_id int,
    challenge_id int,
    user_id int,
    goal_id int,
    title varchar(120),
    description varchar(240),
    date_created date,
    co_author_id int );


create table challenges(
    challenge_id int,
    goal_id int,
    department_id int,
    title varchar(120),
    improvment_target varchar(240),
    start_date date,
    end_date date );


create table departments(
department_id int, 
name varchar(120) );

create table permissions(
permission_id int,
permission varchar(80));

create table users(
user_id int,
department_id int,
permission_id int,
username varchar(120),
password varchar(120),
name varchar(120),
last_name varchar(120) );

create table idea_ratings( 
rating_id int, 
idea_id int,
challenge_id int,
date_created date,
rating_score real,
);

create table comments(
comment_id int,
rating_id int,
idea_id int,
text varchar(480),
user_id int, 
date_created data );