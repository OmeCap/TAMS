create table "teachingAssistants"(
"username" Varchar(64),
"CV" Varchar(70),
"RTW" Varchar(70),
"RTWStatus" Varchar(50),
"bankingInfo" Varchar(70),
"bankingInfoStatus" Varchar(50),
"starterChecklist" Varchar(70),
"starterChecklistStatus" Varchar(50),
"trainingStatus" Varchar(20),
"UPI" Varchar(20),
"photo" Varchar(30),
"researchGroup" Varchar(20),
"feeStatus" Varchar(20),
"address" Varchar(30),
"isPHD" Varchar(30),
"hasWorked" varchar(10),
"hoursSheduled" int,
primary key (username),
FOREIGN KEY (username) REFERENCES users(username)
);