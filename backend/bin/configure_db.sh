export PGPASSWORD='node_password'

echo "Configuring tamsdb"

dropdb -U node_user tamsdb
createdb -U node_user tamsdb

psql -U node_user tamsdb < ./bin/sql/account.sql
psql -U node_user tamsdb < ./bin/sql/taProfile.sql

echo "tamsdb configured"