# 🐳 Docker Documentation

Project:

Leader Digital Platform Backend

This document explains how Docker is used in this project and how the backend environment works.

---

# Why Docker Is Used

Docker is used to create a consistent development environment.

Without Docker:

* Developers manually install PostgreSQL
* Database versions may differ
* Environment setup takes time

With Docker:

* Backend runs inside a container
* PostgreSQL runs inside a container
* Same setup works on every machine

---

# Docker Architecture

```text
Developer Machine


        |

        |


Docker Engine


        |

        |


Docker Network


        |


+----------------------+


Backend Container


Node.js + Express

Port: 5060


+----------------------+


        |


        |


+----------------------+


PostgreSQL Container


Database Server

Port: 5432


+----------------------+
```

---

# Containers Used

This project uses two containers.

---

## 1. Backend Container

Container Name:

```text
subhash_backend
```

Purpose:

Runs the Node.js Express backend API.

Contains:

* Node.js Runtime
* Express Server
* Installed npm packages
* Backend source code

Application runs on:

```text
PORT 5060
```

Docker exposes it locally using:

```text
localhost:8080
```

Mapping:

```text
Host Machine : Docker Container


8080 : 5060
```

Meaning:

Browser/Postman:

```text
localhost:8080
```

goes to:

```text
Express server running inside container on 5060
```

---

## 2. PostgreSQL Container

Container Name:

```text
subhash_postgres
```

Purpose:

Runs PostgreSQL database.

Database:

```text
subhash_platform
```

Database Port:

```text
5432
```

Mapping:

```text
5432 : 5432
```

---

# Docker Files Used

Project structure:

```text
Subhash-Deshmukh


├── backend/

│

│   └── Dockerfile


├── docker-compose.yml


└── database/

    └── init.sql
```

---

# Dockerfile Explanation

Location:

```text
backend/Dockerfile
```

Purpose:

Creates backend image.

Flow:

```text
Node Base Image

        ↓

Create Working Directory

        ↓

Copy package.json

        ↓

Install Dependencies

        ↓

Copy Source Code

        ↓

Run Server
```

---

# Docker Compose

File:

```text
docker-compose.yml
```

Docker Compose manages:

* Backend container
* PostgreSQL container
* Container networking
* Environment variables
* Volumes

---

# PostgreSQL Data Storage

Docker containers are temporary.

If container is removed, data can disappear.

To prevent this we use:

```text
Docker Volume
```

Volume:

```text
postgres_data
```

It stores database files permanently.

---

# Database Initialization

File:

```text
database/init.sql
```

Purpose:

Automatically creates database tables when PostgreSQL container starts first time.

Example:

```text
docker compose up
```

↓

PostgreSQL starts

↓

Runs init.sql

↓

Creates tables

---

# Docker Network

Docker Compose automatically creates a private network.

Containers communicate using service names.

Example:

Inside backend:

```env
DB_HOST=postgres
```

Because:

```text
backend container

        ↓

postgres service

        ↓

PostgreSQL container
```

---

# Important Learning

## Running with Docker

Use:

```bash
docker compose up
```

or rebuild:

```bash
docker compose up --build
```

---

## Stop Containers

```bash
docker compose down
```

---

## See Running Containers

```bash
docker ps
```

---

## View Logs

Backend:

```bash
docker logs subhash_backend
```

Database:

```bash
docker logs subhash_postgres
```

---

## Restart Backend Only

```bash
docker compose restart backend
```

---

# Enter PostgreSQL Container

Open container shell:

```bash
docker exec -it subhash_postgres bash
```

Login PostgreSQL:

```bash
psql -U postgres -d subhash_platform
```

Example query:

```sql
SELECT * FROM users;
```

Exit:

```sql
\q
```

Exit container:

```bash
exit
```

---

# Local vs Docker Difference

Local Node:

```text
npm run dev
```

uses your machine.

Database host:

```text
localhost
```

---

Docker Node:

```text
docker compose up
```

runs inside container.

Database host:

```text
postgres
```

because containers communicate internally.

---

# Current Project Docker Flow

```text
Request

localhost:8080

        |

        v

Docker Port Mapping

        |

        v

Backend Container

Express :5060

        |

        v

Docker Network

        |

        v

PostgreSQL Container

Database :5432
```

---

# Developer Note

Docker makes this project portable.

Any developer can clone the repository and start the complete backend environment using:

```bash
docker compose up --build
```

without manually installing PostgreSQL.

---
