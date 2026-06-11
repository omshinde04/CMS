-- USERS TABLE

CREATE TABLE IF NOT EXISTS users(


id SERIAL PRIMARY KEY,


name VARCHAR(100) NOT NULL,


email VARCHAR(100) UNIQUE NOT NULL,


password TEXT NOT NULL,


role VARCHAR(50)
DEFAULT 'admin',


created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);



-- COMPLAINTS


CREATE TABLE IF NOT EXISTS complaints(

id SERIAL PRIMARY KEY,


complaint_code VARCHAR(50)
UNIQUE,


citizen_name VARCHAR(100),


phone VARCHAR(20),


email VARCHAR(100),


category VARCHAR(100),


title VARCHAR(200),


description TEXT,


status VARCHAR(50)
DEFAULT 'Submitted',


assigned_to INT REFERENCES users(id),


created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);



-- COMPLAINT IMAGES


CREATE TABLE IF NOT EXISTS complaint_images(

id SERIAL PRIMARY KEY,


complaint_id INT REFERENCES complaints(id)
ON DELETE CASCADE,


image TEXT


);



-- COMPLAINT HISTORY


CREATE TABLE IF NOT EXISTS complaint_history(

id SERIAL PRIMARY KEY,


complaint_id INT REFERENCES complaints(id),


old_status VARCHAR(50),


new_status VARCHAR(50),


remark TEXT,


updated_by INT REFERENCES users(id),


created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);




-- BLOG CMS


CREATE TABLE IF NOT EXISTS blogs(

id SERIAL PRIMARY KEY,


title VARCHAR(200),


slug VARCHAR(200),


content TEXT,


image TEXT,


created_by INT REFERENCES users(id),


created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);



-- GALLERY


CREATE TABLE IF NOT EXISTS gallery(

id SERIAL PRIMARY KEY,


title VARCHAR(150),


image TEXT,


category VARCHAR(100),


created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);




-- APPOINTMENTS


CREATE TABLE IF NOT EXISTS appointments(

id SERIAL PRIMARY KEY,


name VARCHAR(100),


phone VARCHAR(20),


email VARCHAR(100),


reason TEXT,


date DATE,


status VARCHAR(50)
DEFAULT 'Pending',


created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);




-- AUDIT LOGS


CREATE TABLE IF NOT EXISTS audit_logs(

id SERIAL PRIMARY KEY,


user_id INT REFERENCES users(id),


action TEXT,


created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);