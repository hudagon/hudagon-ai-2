create database if not exists hudagon_ai_test_2;

use hudagon_ai_test_2;

create table level_1_category(
	id int unsigned primary key auto_increment,
    name varchar(60),
    updated_date datetime,
    created_date datetime,
    delete_status bit(1)
);

create table level_2_category(
	id int unsigned primary key auto_increment,
    level_1_category_id int unsigned,
    name varchar(60),
    updated_date datetime,
    created_date datetime,
    delete_status bit(1),
    foreign key (level_1_category_id) references level_1_category(id)
);

create table level_3_category(
	id int unsigned primary key auto_increment,
    level_2_category_id int unsigned,
    name varchar(60),
    category_desc varchar(90),
    updated_date datetime,
    created_date datetime,
    delete_status bit(1),
    foreign key (level_2_category_id) references level_2_category(id)
);

create table painting(
	id bigint unsigned primary key auto_increment,
    name varchar(300),
    img_url varchar(999),
    updated_date datetime,
    created_date datetime,
    delete_status bit(1)
);

create table level_3_category_painting(
	id bigint unsigned primary key auto_increment,
    level_3_category_id int unsigned,
    painting_id bigint unsigned,
    updated_date datetime,
    created_date datetime,
    delete_status bit(1),
    foreign key (level_3_category_id) references level_3_category(id),
	foreign key (painting_id) references painting(id)
);

CREATE INDEX idx_painting_id ON level_3_category_painting(painting_id);
CREATE INDEX idx_level_3_category_id ON level_3_category_painting(level_3_category_id);
CREATE INDEX idx_name ON level_3_category(name);
ALTER TABLE painting ADD FULLTEXT idx_fulltext_name(name);



