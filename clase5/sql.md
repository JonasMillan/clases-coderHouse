SELECT * FROM coderhouse.user_details;

SELECT username,last_name FROM coderhouse.user_details;

SELECT * 
FROM coderhouse.user_details
WHERE last_name='john';

SELECT * FROM coderhouse.user_details
WHERE last_name='john' AND gender='Female';

select * from coderhouse.user_details
WHERE user_id BETWEEN 10 AND 20;

SELECT * FROM coderhouse.user_details
WHERE last_name='john' AND gender='Female';

SELECT * FROM coderhouse.user_details
WHERE gender='Male' OR gender='Female';

-- ordena por campo

SELECT * FROM coderhouse.user_details order by username;

-- desc ordena por campo desendiente 

SELECT * FROM coderhouse.user_details

order by username desc;

-- as cambia el nombre de la seleccion 

select username as nombre from coderhouse.user_details;

-- count sum avg 

select sum(user_id) as suma from coderhouse.user_details;

select avg(user_id) as promedio from coderhouse.user_details;

select count(user_id) as cant from coderhouse.user_details WHERE gender = 'Female';

-- max min

select max(user_id) as suma from coderhouse.user_details;

-- like -) _ :un carcter %: cualquier caracter o multiples caracteres

select * from coderhouse.user_details where last_name like 'm%';

select * from coderhouse.user_details where last_name like '%m';

select * from coderhouse.user_details where last_name like '__l%';
