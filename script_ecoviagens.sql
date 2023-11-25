create database ecoviagens;

create table flights (id integer primary key AUTO_INCREMENT,
name varchar(100),
airline varchar(100),
airportd varchar(100),
airporta varchar(100),
cost float,
date varchar(100));

insert into flights (name, airline, airportd, airporta, cost, date)
	values 
		('Everto Holleweiger', 'Azul Linhas Aéreas', 'XAP', 'FLN', '200.00', '2023-12-01'),
        ('Bruno Sena', 'Azul Linhas Aéreas', 'XAP', 'FLN', '150.00', '2023-12-01');