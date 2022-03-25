create table vacancies(
"vacancyId" SERIAL,
"postitionsAvailable" Int,
"moduleId" Varchar(30),
"teachingHours" int,
"description" Varchar(600),
"requiredSkills" Varchar(50),
"postdate" date,
primary key("vacancyId"),
FOREIGN KEY ("moduleId") REFERENCES modules("moduleId")
);