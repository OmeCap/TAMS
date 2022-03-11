CREATE TABLE account(
    id                      SERIAL PRIMARY KEY,
    username                CHARACTER(64),
    "passwordHash"          CHARACTER(64),
    "sessionId"             CHARACTER(36)
);