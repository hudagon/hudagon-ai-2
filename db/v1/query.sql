select
	p.name as `Painting name`,
    p.id
from painting p join category_level_3_painting cl3p1 on p.id = cl3p1.painting_id
				join category_level_3 cl31 on cl3p1.category_level_3_id = cl31.id and cl31.id = 1
                join category_level_3_painting cl3p2 on p.id = cl3p2.painting_id
                join category_level_3 cl32 on cl3p2.category_level_3_id = cl32.id and cl32.id = 2
				join category_level_3_painting cl3p3 on p.id = cl3p3.painting_id
                join category_level_3 cl33 on cl3p3.category_level_3_id = cl33.id and cl33.id = 3
				join category_ratio cr on cr.id = p.category_ratio_id
                join category_topic ct on ct.id = p.category_topic_id
                join painting_category_color pcc on pcc.painting_id = p.id
                join category_color cc on cc.id = pcc.category_color_id
where cr.id in (2, 3, 1, 4, 5) and ct.id in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
							   and cc.id in (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
                               
select 
	p.id as `painting id`,
    cl3p.id as `category level 3 painting id`,
    cl3.id as `category level 3 id`
from painting p join category_level_3_painting cl3p on p.id = cl3p.painting_id
				join category_level_3 cl3 on cl3.id = cl3p.category_level_3_id
where cl3.category_style_id is null;