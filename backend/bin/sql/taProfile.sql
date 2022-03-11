CREATE TABLE taProfile(
    id                      SERIAL PRIMARY KEY,
    email                   CHARACTER(32),
    upi                     CHARACTER(32),
    "homeAddress"           CHARACTER(64),
    "currentYear"           CHARACTER(32)
);