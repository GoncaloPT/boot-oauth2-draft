INSERT INTO user (user_id,activated,activation_key,email,first_name,image_url,lang_key,last_name,login,password_hash,reset_date,reset_key) values (1,1,null,"go.silva@cgi.com","Goncalo","the_url","pt","Silva","silvagc","password",null,null);
INSERT INTO user(login, password_hash, first_name, last_name, email, image_url, activated, lang_key, activation_key, reset_key) VALUES ('carlosLima', '$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC', 'Carlos', 'Lima', 'fornecedor@teste.com', null, true, 'pt-pt', null, null);

insert into authority values(1,'Admin');
insert into authority values(2,'RequestCreator');

INSERT INTO granted_authority values(1,1,1);
INSERT INTO granted_authority values(2,2,2);
commit;
