# 🐳 Docker Documentation

Project:

# Leader Digital Platform

This document explains how Docker is used to run the complete full-stack application.

The platform contains:

- Next.js Frontend
- Node.js Express Backend
- PostgreSQL Database

All services run inside Docker containers using Docker Compose.

---

# Why Docker Is Used

Docker creates a consistent development environment.

Without Docker:

- Developers manually install Node.js
- Developers manually install PostgreSQL
- Different versions may create issues
- Setup takes more time

With Docker:

- Frontend runs inside a container
- Backend runs inside a container
- PostgreSQL runs inside a container
- Same setup works on every developer machine

---

# Full Stack Docker Architecture


```text
                Developer Machine


                        |

                        v


                  Docker Engine


                        |

                        v


                Docker Network



        +--------------------------+

        Frontend Container

        Next.js Application

        Port: 3000

        subhash_frontend

        +--------------------------+


                        |


                        v


        +--------------------------+

        Backend Container

        Node.js + Express API

        Port: 5060

        subhash_backend

        +--------------------------+


                        |


                        v


        +--------------------------+

        Database Container

        PostgreSQL Server

        Port: 5432

        subhash_postgres

        +--------------------------+
```

---

# Containers Used

This project uses three containers.

---

# 1. Frontend Container

Container Name:

```text
subhash_frontend
```

Technology:

```text
Next.js + React
```

Purpose:

Runs the public website and admin dashboard UI.

Contains:

- Next.js application
- React components
- Tailwind CSS styling
- Frontend dependencies


Application runs on:

```text
PORT 3000
```


Access:

```text
http://localhost:3000
```

---

# 2. Backend Container

Container Name:

```text
subhash_backend
```

Technology:

```text
Node.js + Express.js
```

Purpose:

Runs REST API server.

Contains:

- Express server
- Controllers
- Routes
- Middleware
- Authentication logic


Application runs internally:

```text
PORT 5060
```


Docker exposes:

```text
localhost:8080
```


Port Mapping:

```text
Host Machine : Container


8080 : 5060
```


Meaning:


Request:

```text
localhost:8080/api
```

goes to:

```text
Express server running on port 5060
```

---

# 3. PostgreSQL Container

Container Name:

```text
subhash_postgres
```


Technology:

```text
PostgreSQL 16
```


Purpose:

Stores application data.


Database:

```text
subhash_platform
```


Port:

```text
5432
```


Port Mapping:

```text
5432 : 5432
```

---

# Project Docker Files


```text
Subhash-Deshmukh


├── frontend/

│   └── Dockerfile


├── backend/

│   └── Dockerfile


├── database/

│   └── init.sql


└── docker-compose.yml

```

---

# Dockerfile Flow


Both frontend and backend containers follow:


```text
Base Node Image

        ↓

Create Working Directory

        ↓

Copy package.json

        ↓

Install Dependencies

        ↓

Copy Source Code

        ↓

Start Application
```

---

# Docker Compose


File:

```text
docker-compose.yml
```


Docker Compose manages:

- Frontend container
- Backend container
- PostgreSQL container
- Container communication
- Environment variables
- Volumes
- Port mapping

---

# Docker Network Communication


Docker Compose automatically creates a private network.


Containers communicate using service names.


Example:


Backend connects database using:


```env
DB_HOST=postgres
```


Flow:


```text
Backend Container

        |

        v

postgres service name

        |

        v

PostgreSQL Container
```

---

# PostgreSQL Persistent Storage


Containers can be recreated anytime.


To prevent losing database data we use:


```text
Docker Volume
```


Volume name:


```text
postgres_data
```


Stores:

- Tables
- Records
- Database files

---

# Database Initialization


File:


```text
database/init.sql
```


Runs automatically when PostgreSQL starts first time.


Flow:


```text
docker compose up


        ↓


PostgreSQL Container Starts


        ↓


Execute init.sql


        ↓


Create Tables

```

---

# Running Complete Project


From project root:


```bash
docker compose up
```


or rebuild:


```bash
docker compose up --build
```


Starts:


```text
subhash_frontend    ✅

subhash_backend     ✅

subhash_postgres    ✅
```

---

# Application URLs


Frontend:


```text
http://localhost:3000
```


Backend:


```text
http://localhost:8080/api
```


PostgreSQL:


```text
localhost:5432
```

---

# Stop Containers


```bash
docker compose down
```

---

# Check Running Containers


```bash
docker ps
```

---

# View Container Logs


Frontend:


```bash
docker logs subhash_frontend
```


Backend:


```bash
docker logs subhash_backend
```


Database:


```bash
docker logs subhash_postgres
```

---

# Restart Individual Services


Frontend:


```bash
docker compose restart frontend
```


Backend:


```bash
docker compose restart backend
```


Database:


```bash
docker compose restart postgres
```

---

# Access PostgreSQL Container


Enter container:


```bash
docker exec -it subhash_postgres bash
```


Login database:


```bash
psql -U postgres -d subhash_platform
```


Show tables:


```sql
\dt
```


Example:


```sql
SELECT * FROM users;
```


Exit PostgreSQL:


```sql
\q
```


Exit container:


```bash
exit
```

---

# Local Development vs Docker


## Without Docker


Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run dev
```

Database:

Installed manually



## With Docker


Only one command:


```bash
docker compose up --build
```


Docker handles:

- Frontend
- Backend
- Database
- Networking

---

# Complete Request Flow


```text
User Browser


      |


      v


localhost:3000


      |


      v


Next.js Frontend Container


      |


API Request


      |


      v


Express Backend Container

localhost:8080


      |


Database Query


      |


      v


PostgreSQL Container

5432

```

---

# Developer Note

The complete Leader Digital Platform can run using:


```bash
docker compose up --build
```


No manual PostgreSQL installation required.

The same environment works across different machines.
