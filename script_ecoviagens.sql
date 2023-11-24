create database ecoviagens;

create table passengers (id integer primary key AUTO_INCREMENT,
name varchar(100),
airline varchar(100),
cost float);

insert into passengers (name, airline, cost)
	values 
		('Everto Holleweiger', 'Azul Linhas Aéreas', '200.00'),
        ('Bruno Sena', 'Azul Linhas Aéreas', '150.00');