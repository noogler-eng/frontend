-- SELECT [coloumn-name (s)] FROM [table_name]
SELECT * FROM cars;
SELECT brand, model, price FROM cars;
SELECT brand, model, condtition, year FROM cars;

-- WHERE 
SELECT brand, model, color, price FROM cars
WHERE color = "black";

-- CONDITION
SELECT brand, model, condition, price FROM cars
WHERE condition > 3;

SELECT brand, model, condition, price FROM cars
WHERE year != 1965;
-- both are same != or <> here
SELECT brand, model, condition, price FROM cars
WHERE year <> 1965;

SELECT brand, model, color, condition, price FROM cars
WHERE color != 'yellow';
-- above will filter out exact matches
-- it will filer out light yellow, dark yellow, yellow ... etc
-- % is any no of characters, _ is only one character
SELECT brand, model, color, condition, price FROM cars
WHERE color NOT LIKE '%yellow%';

SELECT brand, model, color, condition, price FROM cars
WHERE model LIKE 'DB_';

-- AND
SELECT brand, model, color, condition, price FROM cars
WHERE color NOT LIKE "%green%" 
AND model LIKE "DB_";


SELECT brand, model, color, condition, price FROM cars
WHERE condition >= 3 
AND year < 1970 
AND price < 100000;

-- BETWEEN
SELECT brand, model, color, condition, price FROM cars
WHERE year >= 1980
AND year <= 1989;

SELECT brand, model, color, condition, price FROM cars
WHERE year BETWEEN 1980 AND 1989;

SELECT brand, model, color, condition, price FROM cars
WHERE price BETWEEN 20000 AND 60000
AND condition BETWEEN 1 AND 3
AND color LIKE '%red%';

-- OR
SELECT brand, model, color, condition, price FROM cars
WHERE (price < 250000 
OR brand = "Porsche")
AND condition > 3;

SELECT brand, model, color, condition, price FROM cars
WHERE (color LIKE '%red%'
OR year BETWEEN 1960 AND 1969)
AND sold IS FALSE;

-- IN
SELECT brand, model, color, condition, price FROM cars
WHERE brand IN ('Ford', 'Chevorlet', 'Ferrari')
AND sold IS FALSE;

SELECT brand, model, color, condition, price FROM cars
WHERE sold IS FALSE 
AND (brand NOT IN ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
OR price < 50000);

SELECT brand, model, color, condition, price FROM cars
WHERE color = "red" 
AND brand != "Ferrari" 
AND sold IS FALSE;

-- ORDER BY
