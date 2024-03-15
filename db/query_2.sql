SELECT p.*
FROM painting p
JOIN level_3_category_painting l3cp1 ON p.id = l3cp1.painting_id AND l3cp1.level_3_category_id = 103
JOIN level_3_category_painting l3cp2 ON p.id = l3cp2.painting_id AND l3cp2.level_3_category_id = 109
JOIN level_3_category_painting l3cp3 ON p.id = l3cp3.painting_id AND l3cp3.level_3_category_id = 100
JOIN level_3_category_painting l3cp4 ON p.id = l3cp4.painting_id AND l3cp4.level_3_category_id = 9
WHERE p.delete_status = 0;


