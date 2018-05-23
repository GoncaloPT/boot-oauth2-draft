INSERT INTO user (user_id,activated,activation_key,email,first_name,image_url,lang_key,last_name,login,password_hash,reset_date,reset_key) values (1,1,null,"go.silva@cgi.com","Goncalo","the_url","pt","Silva","silvagc","password",null,null);
insert into authority values(1,'Admin');
INSERT INTO granted_authority values(1,1,1);
commit;
