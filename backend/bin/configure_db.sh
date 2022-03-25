export PGPASSWORD='node_password'

echo "Configuring tamsdb"

dropdb -U node_user tamsdb
createdb -U node_user tamsdb

psql -U node_user tamsdb < ./bin/sql/users.sql
psql -U node_user tamsdb < ./bin/sql/taProfile.sql
psql -U node_user tamsdb < ./bin/sql/teachingAssistants.sql
psql -U node_user tamsdb < ./bin/sql/modules.sql
psql -U node_user tamsdb < ./bin/sql/vacancies.sql
psql -U node_user tamsdb < ./bin/sql/applications.sql
psql -U node_user tamsdb < ./bin/sql/approvedTeachingAssistants.sql

echo "tamsdb configured"