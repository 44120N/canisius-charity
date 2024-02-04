-- CREATE TABLE seats(
--     id VARCHAR(4) PRIMARY KEY,
--     isAvailable BOOLEAN NOT NULL,
--     isOrder BOOLEAN NOT NULL,
--     isVIP BOOLEAN NOT NULL,
--     owner_id VARCHAR(50)
-- );

INSERT INTO seats(id, isAvailable, isOrder, isVIP, owner_id) VALUES
('C1', true, false, true, NULL),
('C2', true, false, true, NULL),
('C3', true, false, true, NULL),
('C4', true, false, true, NULL),
('C5', false, false, true, NULL),
('C6', true, false, false, NULL),
('C7', true, false, false, NULL),
('C8', true, false, false, NULL),
('C9', true, false, false, NULL),
('C10', true, false, false, NULL)

-- UPDATE seats SET isOrder = false WHERE id = 'A2';
-- UPDATE seats SET isAvailable = false WHERE id = 'A9';
-- UPDATE seats SET isOrder = true WHERE id = 'A5';
-- DELETE FROM seats WHERE id = 'A10';

-- DROP TABLE seats;

-- CREATE TABLE users (
--     id VARCHAR(50) PRIMARY KEY,
--     owned_seat VARCHAR(3)
-- );

-- DROP TABLE users;
-- ALTER TABLE seats
-- DROP COLUMN isOrder;

-- TRUNCATE TABLE users;