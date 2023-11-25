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
		('Everto Holleweiger', 'Azul Linhas Aéreas Brasileiras', 'Aeroporto de Chapecó (XAP)', 'Aeroporto Internacional de Florianópolis (FLN)', '200.00', '2023-12-01'),
        ('Bruno Sena','Azul Linhas Aéreas Brasileiras', 'Aeroporto de Chapecó (XAP)', 'Aeroporto Internacional de Florianópolis (FLN)', '250.00', '2023-12-01'),
		('Fran Petry','LATAM Airlines', 'Aeroporto Internacional de Curitiba (CWB)', 'Aeroporto do Rio de Janeiro - Santos Dumont (SDU)', '199.90', '2024-02-01');