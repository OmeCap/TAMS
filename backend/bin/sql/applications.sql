create table applications(
"applicationId" SERIAL,
"vacancyId" Int,
"applicantUsername" Varchar(50) UNIQUE,
"coverLetter" Varchar(1000),
Primary Key("applicationId"),
FOREIGN KEY ("vacancyId") REFERENCES vacancies("vacancyId"),
FOREIGN KEY ("applicantUsername") REFERENCES "teachingAssistants"(username)
);