CREATE TABLE IF NOT EXISTS Customer (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(100) NOT NULL,
  password VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  profile_photo VARCHAR,
)