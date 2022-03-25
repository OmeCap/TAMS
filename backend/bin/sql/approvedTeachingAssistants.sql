create table "approvedTeachingAssistants"(
username Varchar(30),
"moduleId" Varchar(30),
primary key(username,"moduleId"),
FOREIGN KEY (username) REFERENCES applications("applicantUsername")
);
