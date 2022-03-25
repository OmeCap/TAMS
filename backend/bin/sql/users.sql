CREATE TABLE users(
"userId" SERIAL,
"username" Varchar(64) UNIQUE,
"passwordHash" Varchar(64),
"fullName" Varchar(70),
"accountType" Varchar(20),
"sessionId" Varchar(36),
PRIMARY KEY("userId")
);