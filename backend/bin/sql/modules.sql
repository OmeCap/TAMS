CREATE TABLE modules(
"moduleId" Varchar(30),
"moduleLeader" Varchar(64),
"moduleTitle" Varchar(50),
"moduleDescription" Varchar(1000),
"budgetProposal" Int, 
"budgetStatus" Varchar(50),
"priorityStatus" Int,
"comments" Varchar(700),
"budgetHours" Int, 
"hoursUsed" Int,
PRIMARY KEY("moduleId"),
FOREIGN KEY ("moduleLeader") REFERENCES users(username)
);