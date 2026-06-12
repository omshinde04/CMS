# Database Design


Database:

PostgreSQL


Database Name:

subhash_platform



## Tables


### users

Stores admin users.


Columns:

- id

- name

- email

- password

- role

- status



---


### complaints


Stores citizen complaints.


Relations:

complaints

↓

complaint_images


↓

complaint_history




---


### blogs


Stores CMS blogs.



---


### gallery


Stores leader event images.



---


### appointments


Stores citizen appointment requests.



---


<!-- ### audit_logs


Stores administrative activities. -->



## Design Decisions


- Relational database for structured government data

- Foreign keys for integrity

- Separate history table for complaint tracking

- Role based user management
