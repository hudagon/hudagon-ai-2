INSERT INTO level_1_category (name, updated_date, created_date, delete_status) VALUES
('Chủ thể', NOW(), NOW(), 0),
('Chủ đề', NOW(), NOW(), 0),
('Phong cách', NOW(), NOW(), 0),
('Tỉ lệ', NOW(), NOW(), 0),
('Màu sắc', NOW(), NOW(), 0);

INSERT INTO level_2_category (level_1_category_id, name, updated_date, created_date, delete_status) VALUES
(1, 'subject_1', NOW(), NOW(), 0),
(1, 'subject_2', NOW(), NOW(), 0),
(1, 'subject_3', NOW(), NOW(), 0),
(1, 'subject_4', NOW(), NOW(), 0),
(1, 'subject_5', NOW(), NOW(), 0),
(1, 'subject_6', NOW(), NOW(), 0);

INSERT INTO level_2_category (level_1_category_id, name, updated_date, created_date, delete_status) VALUES
(3, 'style_1', NOW(), NOW(), 0),
(3, 'style_2', NOW(), NOW(), 0),
(3, 'style_3', NOW(), NOW(), 0);

INSERT INTO level_2_category (level_1_category_id, name, updated_date, created_date, delete_status) VALUES
(2, 'topic', NOW(), NOW(), 0);

INSERT INTO level_2_category (level_1_category_id, name, updated_date, created_date, delete_status) VALUES
(4, 'ratio', NOW(), NOW(), 0);

INSERT INTO level_2_category (level_1_category_id, name, updated_date, created_date, delete_status) VALUES
(5, 'color', NOW(), NOW(), 0);

-- Insert level_3_categories for "subject_1" (ID = 1)
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(1, 'subject_1_1', NULL, NOW(), NOW(), 0),
(1, 'subject_1_2', NULL, NOW(), NOW(), 0),
(1, 'subject_1_3', NULL, NOW(), NOW(), 0),
(1, 'subject_1_4', NULL, NOW(), NOW(), 0),
(1, 'subject_1_5', NULL, NOW(), NOW(), 0),
(1, 'subject_1_6', NULL, NOW(), NOW(), 0),
(1, 'subject_1_7', NULL, NOW(), NOW(), 0),
(1, 'subject_1_8', NULL, NOW(), NOW(), 0),
(1, 'subject_1_9', NULL, NOW(), NOW(), 0),
(1, 'subject_1_other', NULL, NOW(), NOW(), 0);

-- Insert level_3_categories for "subject_2" (ID = 2)
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(2, 'subject_2_1', NULL, NOW(), NOW(), 0),
(2, 'subject_2_2', NULL, NOW(), NOW(), 0),
(2, 'subject_2_3', NULL, NOW(), NOW(), 0),
(2, 'subject_2_4', NULL, NOW(), NOW(), 0),
(2, 'subject_2_5', NULL, NOW(), NOW(), 0),
(2, 'subject_2_6', NULL, NOW(), NOW(), 0),
(2, 'subject_2_7', NULL, NOW(), NOW(), 0),
(2, 'subject_2_8', NULL, NOW(), NOW(), 0),
(2, 'subject_2_9', NULL, NOW(), NOW(), 0),
(2, 'subject_2_other', NULL, NOW(), NOW(), 0);

-- Insert level_3_categories for "subject_3" (ID = 3)
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(3, 'subject_3_1', NULL, NOW(), NOW(), 0),
(3, 'subject_3_2', NULL, NOW(), NOW(), 0),
(3, 'subject_3_3', NULL, NOW(), NOW(), 0),
(3, 'subject_3_4', NULL, NOW(), NOW(), 0),
(3, 'subject_3_5', NULL, NOW(), NOW(), 0),
(3, 'subject_3_6', NULL, NOW(), NOW(), 0),
(3, 'subject_3_7', NULL, NOW(), NOW(), 0),
(3, 'subject_3_8', NULL, NOW(), NOW(), 0),
(3, 'subject_3_9', NULL, NOW(), NOW(), 0),
(3, 'subject_3_other', NULL, NOW(), NOW(), 0);

-- Insert level_3_categories for "subject_4" (ID = 4)
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(4, 'subject_4_1', NULL, NOW(), NOW(), 0),
(4, 'subject_4_2', NULL, NOW(), NOW(), 0),
(4, 'subject_4_3', NULL, NOW(), NOW(), 0),
(4, 'subject_4_4', NULL, NOW(), NOW(), 0),
(4, 'subject_4_5', NULL, NOW(), NOW(), 0),
(4, 'subject_4_6', NULL, NOW(), NOW(), 0),
(4, 'subject_4_7', NULL, NOW(), NOW(), 0),
(4, 'subject_4_8', NULL, NOW(), NOW(), 0),
(4, 'subject_4_9', NULL, NOW(), NOW(), 0),
(4, 'subject_4_other', NULL, NOW(), NOW(), 0);

-- Insert level_3_categories for "subject_5" (ID = 5)
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(5, 'subject_5_1', NULL, NOW(), NOW(), 0),
(5, 'subject_5_2', NULL, NOW(), NOW(), 0),
(5, 'subject_5_3', NULL, NOW(), NOW(), 0),
(5, 'subject_5_4', NULL, NOW(), NOW(), 0),
(5, 'subject_5_5', NULL, NOW(), NOW(), 0),
(5, 'subject_5_6', NULL, NOW(), NOW(), 0),
(5, 'subject_5_7', NULL, NOW(), NOW(), 0),
(5, 'subject_5_8', NULL, NOW(), NOW(), 0),
(5, 'subject_5_9', NULL, NOW(), NOW(), 0),
(5, 'subject_5_other', NULL, NOW(), NOW(), 0);

-- Insert level_3_categories for "subject_6" (ID = 6)
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(6, 'subject_6_1', NULL, NOW(), NOW(), 0),
(6, 'subject_6_2', NULL, NOW(), NOW(), 0),
(6, 'subject_6_3', NULL, NOW(), NOW(), 0),
(6, 'subject_6_4', NULL, NOW(), NOW(), 0),
(6, 'subject_6_5', NULL, NOW(), NOW(), 0),
(6, 'subject_6_6', NULL, NOW(), NOW(), 0),
(6, 'subject_6_7', NULL, NOW(), NOW(), 0),
(6, 'subject_6_8', NULL, NOW(), NOW(), 0),
(6, 'subject_6_9', NULL, NOW(), NOW(), 0),
(6, 'subject_6_other', NULL, NOW(), NOW(), 0);

-- Insert level_3_categories for "style_1" (ID = 7) with category_desc as NULL
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(7, 'style_1_1', NULL, NOW(), NOW(), 0),
(7, 'style_1_2', NULL, NOW(), NOW(), 0),
(7, 'style_1_3', NULL, NOW(), NOW(), 0),
(7, 'style_1_4', NULL, NOW(), NOW(), 0),
(7, 'style_1_5', NULL, NOW(), NOW(), 0),
(7, 'style_1_6', NULL, NOW(), NOW(), 0),
(7, 'style_1_7', NULL, NOW(), NOW(), 0),
(7, 'style_1_8', NULL, NOW(), NOW(), 0),
(7, 'style_1_9', NULL, NOW(), NOW(), 0),
(7, 'style_1_other', NULL, NOW(), NOW(), 0);

-- Insert level_3_categories for "style_2" (ID = 8) alternating "material" and "school"
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(8, 'style_2_1', 'material', NOW(), NOW(), 0),
(8, 'style_2_2', 'school', NOW(), NOW(), 0),
(8, 'style_2_3', 'material', NOW(), NOW(), 0),
(8, 'style_2_4', 'school', NOW(), NOW(), 0),
(8, 'style_2_5', 'material', NOW(), NOW(), 0),
(8, 'style_2_6', 'school', NOW(), NOW(), 0),
(8, 'style_2_7', 'material', NOW(), NOW(), 0),
(8, 'style_2_8', 'school', NOW(), NOW(), 0),
(8, 'style_2_9', 'material', NOW(), NOW(), 0),
(8, 'style_2_other', 'material', NOW(), NOW(), 0);

-- Insert level_3_categories for "style_3" (ID = 9) alternating "foreign" and "vietnam"
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(9, 'style_3_1', 'foreign', NOW(), NOW(), 0),
(9, 'style_3_2', 'vietnam', NOW(), NOW(), 0),
(9, 'style_3_3', 'foreign', NOW(), NOW(), 0),
(9, 'style_3_4', 'vietnam', NOW(), NOW(), 0),
(9, 'style_3_5', 'foreign', NOW(), NOW(), 0),
(9, 'style_3_6', 'vietnam', NOW(), NOW(), 0),
(9, 'style_3_7', 'foreign', NOW(), NOW(), 0),
(9, 'style_3_8', 'vietnam', NOW(), NOW(), 0),
(9, 'style_3_9', 'foreign', NOW(), NOW(), 0),
(9, 'style_3_other', 'foreign', NOW(), NOW(), 0);

-- Insert level_3_categories for "topic" (ID = 10) with 9 records
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(10, 'topic_1', NULL, NOW(), NOW(), 0),
(10, 'topic_2', NULL, NOW(), NOW(), 0),
(10, 'topic_3', NULL, NOW(), NOW(), 0),
(10, 'topic_4', NULL, NOW(), NOW(), 0),
(10, 'topic_5', NULL, NOW(), NOW(), 0),
(10, 'topic_6', NULL, NOW(), NOW(), 0),
(10, 'topic_7', NULL, NOW(), NOW(), 0),
(10, 'topic_8', NULL, NOW(), NOW(), 0),
(10, 'topic_9', NULL, NOW(), NOW(), 0),
(10, 'topic_other', NULL, NOW(), NOW(), 0);

-- Insert level_3_categories for "ratio" (ID = 11) with 6 records
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(11, 'ratio_1', NULL, NOW(), NOW(), 0),
(11, 'ratio_2', NULL, NOW(), NOW(), 0),
(11, 'ratio_3', NULL, NOW(), NOW(), 0),
(11, 'ratio_4', NULL, NOW(), NOW(), 0),
(11, 'ratio_5', NULL, NOW(), NOW(), 0),
(11, 'ratio_6', NULL, NOW(), NOW(), 0);

-- Insert level_3_categories for "color" (ID = 12) with 12 records
INSERT INTO level_3_category (level_2_category_id, name, category_desc, updated_date, created_date, delete_status) VALUES
(12, 'color_1', NULL, NOW(), NOW(), 0),
(12, 'color_2', NULL, NOW(), NOW(), 0),
(12, 'color_3', NULL, NOW(), NOW(), 0),
(12, 'color_4', NULL, NOW(), NOW(), 0),
(12, 'color_5', NULL, NOW(), NOW(), 0),
(12, 'color_6', NULL, NOW(), NOW(), 0),
(12, 'color_7', NULL, NOW(), NOW(), 0),
(12, 'color_8', NULL, NOW(), NOW(), 0),
(12, 'color_9', NULL, NOW(), NOW(), 0),
(12, 'color_10', NULL, NOW(), NOW(), 0),
(12, 'color_11', NULL, NOW(), NOW(), 0),
(12, 'color_12', NULL, NOW(), NOW(), 0);

DELIMITER $$

CREATE PROCEDURE InsertPaintings()
BEGIN
  DECLARE i INT DEFAULT 1;
  WHILE i <= 1000 DO
    INSERT INTO painting (name, img_url, updated_date, created_date, delete_status) 
    VALUES (CONCAT('Painting ', i), CONCAT('http://example.com/img', i, '.jpg'), NOW(), NOW(), 0);
    SET i = i + 1;
  END WHILE;
END$$

DELIMITER ;

CALL InsertPaintings();

-- INSERT LEVEL_3_CATEGORY_PAINTING ---------------------------------------------
-- RATIO--------
DELIMITER $$

CREATE PROCEDURE CreateAdjustedRatioRecords()
BEGIN
  DECLARE i INT DEFAULT 1;
  DECLARE ratio_id INT;
  WHILE i <= 1000 DO
    -- Randomly select a ratio_id between 100 and 105 for each painting
    SET ratio_id = FLOOR(100 + (RAND() * 6));
    
    INSERT INTO level_3_category_painting (level_3_category_id, painting_id, updated_date, created_date, delete_status)
    VALUES (ratio_id, i, NOW(), NOW(), 0);
    
    SET i = i + 1;
  END WHILE;
END$$

DELIMITER ;

CALL CreateAdjustedRatioRecords();

-- COLOR--------
DELIMITER $$

CREATE PROCEDURE CreateColorRecords()
BEGIN
  DECLARE i INT DEFAULT 1;
  DECLARE color_id INT;
  WHILE i <= 1000 DO
    -- Randomly select a color_id between 106 and 117 for each painting
    SET color_id = FLOOR(106 + (RAND() * 12));
    
    INSERT INTO level_3_category_painting (level_3_category_id, painting_id, updated_date, created_date, delete_status)
    VALUES (color_id, i, NOW(), NOW(), 0);
    
    SET i = i + 1;
  END WHILE;
END$$

DELIMITER ;

CALL CreateColorRecords();

-- TOPIC -----------
DELIMITER $$

CREATE PROCEDURE CreateTopicRecords()
BEGIN
  DECLARE i INT DEFAULT 1;
  DECLARE topic_id INT;
  WHILE i <= 1000 DO
    -- Randomly select a topic_id between 91 and 100 for each painting
    SET topic_id = FLOOR(91 + (RAND() * 10));
    
    INSERT INTO level_3_category_painting (level_3_category_id, painting_id, updated_date, created_date, delete_status)
    VALUES (topic_id, i, NOW(), NOW(), 0);
    
    SET i = i + 1;
  END WHILE;
END$$

DELIMITER ;

CALL CreateTopicRecords();

-- SUBJECT 1 -------------
DELIMITER $$

CREATE PROCEDURE CreateSimpleSubjectRecords()
BEGIN
  DECLARE i INT DEFAULT 1;
  DECLARE subject_id INT;
  
  WHILE i <= 300 DO
    -- Randomly select a subject_id between 1 and 60 for each painting
    SET subject_id = FLOOR(1 + (RAND() * 60));
    
    INSERT INTO level_3_category_painting (level_3_category_id, painting_id, updated_date, created_date, delete_status)
    VALUES (subject_id, i, NOW(), NOW(), 0);
    
    SET i = i + 1;
  END WHILE;
END$$

DELIMITER ;

CALL CreateSimpleSubjectRecords();

-- SUBJECT 2 ------------------
DELIMITER $$

CREATE PROCEDURE CreateTwoSubjectRecordsForNext300()
BEGIN
  DECLARE i INT DEFAULT 301; -- Bắt đầu từ bức tranh ID 301
  DECLARE subject_id1 INT;
  DECLARE subject_id2 INT;
  DECLARE max_painting_id INT DEFAULT 600; -- Kết thúc ở bức tranh ID 600

  WHILE i <= max_painting_id DO
    -- Chọn ngẫu nhiên subject_id đầu tiên trong khoảng từ 1 đến 60
    SET subject_id1 = FLOOR(1 + (RAND() * 60));
    
    -- Đảm bảo subject_id thứ hai khác với subject_id đầu tiên
    REPEAT
      SET subject_id2 = FLOOR(1 + (RAND() * 60));
    UNTIL subject_id2 <> subject_id1 END REPEAT;
    
    -- Chèn bản ghi đầu tiên cho subject
    INSERT INTO level_3_category_painting (level_3_category_id, painting_id, updated_date, created_date, delete_status)
    VALUES (subject_id1, i, NOW(), NOW(), 0);
    
    -- Chèn bản ghi thứ hai cho subject
    INSERT INTO level_3_category_painting (level_3_category_id, painting_id, updated_date, created_date, delete_status)
    VALUES (subject_id2, i, NOW(), NOW(), 0);

    SET i = i + 1;
  END WHILE;
END$$

DELIMITER ;

CALL CreateTwoSubjectRecordsForNext300();

-- SUBJECT 3 -------------
DELIMITER $$

CREATE PROCEDURE CreateThreeSubjectRecordsForLast400()
BEGIN
  DECLARE i INT DEFAULT 601; -- Bắt đầu từ bức tranh có ID 601
  DECLARE subject_id1 INT;
  DECLARE subject_id2 INT;
  DECLARE subject_id3 INT;
  DECLARE max_painting_id INT DEFAULT 1000; -- Kết thúc ở bức tranh ID 1000

  WHILE i <= max_painting_id DO
    -- Chọn ngẫu nhiên subject_id đầu tiên trong khoảng từ 1 đến 60
    SET subject_id1 = FLOOR(1 + (RAND() * 60));
    
    -- Đảm bảo subject_id thứ hai khác với subject_id đầu tiên
    REPEAT
      SET subject_id2 = FLOOR(1 + (RAND() * 60));
    UNTIL subject_id2 <> subject_id1 END REPEAT;

    -- Đảm bảo subject_id thứ ba khác với hai subject_id trước
    REPEAT
      SET subject_id3 = FLOOR(1 + (RAND() * 60));
    UNTIL subject_id3 <> subject_id1 AND subject_id3 <> subject_id2 END REPEAT;
    
    -- Chèn bản ghi cho mỗi subject
    INSERT INTO level_3_category_painting (level_3_category_id, painting_id, updated_date, created_date, delete_status)
    VALUES (subject_id1, i, NOW(), NOW(), 0), (subject_id2, i, NOW(), NOW(), 0), (subject_id3, i, NOW(), NOW(), 0);

    SET i = i + 1;
  END WHILE;
END$$

DELIMITER ;


CALL CreateThreeSubjectRecordsForLast400();






