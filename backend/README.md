# 🏛️ Leader Digital Platform - Backend

A production-structured backend system designed for managing a digital platform for a public leader.

The platform provides secure APIs for citizen services, complaint handling, appointment management, content management, media management, and administrative analytics.

Built as a Full Stack Developer hiring challenge project with focus on:

* Clean Backend Architecture
* Secure Authentication
* Scalable Database Design
* Role Based Access Control
* Dockerized Development Environment

---

## 📌 Project Overview

The system contains two major user flows:

### Citizen Side

Citizens can:

* Submit complaints
* Upload complaint images
* Track complaint status
* Request appointments
* View blogs and gallery content

### Admin Side

Administrators can:

* Manage complaints
* Update complaint progress
* Manage appointments
* Publish blogs
* Maintain gallery content
* Monitor dashboard analytics

---

# 🧰 Tech Stack

## Backend

| Technology | Purpose                    |
| ---------- | -------------------------- |
| Node.js    | Runtime Environment        |
| Express.js | Backend Framework          |
| PostgreSQL | Relational Database        |
| JWT        | Authentication             |
| bcrypt     | Password Encryption        |
| Multer     | File Upload Handling       |
| Nodemailer | Email Notification Service |

---

## DevOps

| Tool           | Usage                 |
| -------------- | --------------------- |
| Docker         | Containerization      |
| Docker Compose | Multi-container setup |

---

# 🏗️ Backend Architecture

```
Client Application

        |

        v

REST API Layer

        |

        v

Express Routes

        |

        v

Controllers

        |

        v

PostgreSQL Database
```

---

# 📂 Folder Structure

```
backend/

├── config/
│   └── db.js
│
├── controllers/
│
├── middleware/
│
├── routes/
│
├── uploads/
│
├── utils/
│
├── Dockerfile
│
└── server.js


database/

└── init.sql


docs/

├── API.md
├── ARCHITECTURE.md
└── DATABASE.md


docker-compose.yml
```

---

# 🔐 Authentication & Authorization

Implemented secure authentication using:

* JWT based authentication
* bcrypt password hashing
* Protected API routes
* Role based access control middleware

Supported Roles:

| Role              | Responsibility              |
| ----------------- | --------------------------- |
| Super Admin       | Complete system access      |
| Admin             | Administrative operations   |
| Content Manager   | Blog and gallery management |
| Complaint Manager | Complaint handling          |

---

# 📝 Complaint Management System

Complete complaint workflow implementation.

Citizen Features:

* Create complaint
* Upload multiple images
* Generate tracking ID
* Track complaint progress

Admin Features:

* View complaints
* Update complaint status
* Maintain complaint history

Status Flow:

```
Submitted

    ↓

Under Review

    ↓

Assigned

    ↓

In Progress

    ↓

Resolved

    ↓

Closed
```

---

# 📅 Appointment Management

Features:

* Citizen appointment requests
* Appointment status management
* Email notifications on updates

Appointment Status:

* Pending
* Approved
* Rejected
* Completed

---

# 📰 Blog CMS

Features:

* Create blog posts
* Upload blog images
* Fetch published blogs
* Delete blogs

Protected using role based permissions.

---

# 🖼️ Gallery Management

Features:

* Upload gallery images
* Categorize gallery content
* Fetch gallery data
* Delete gallery records

---

# 📊 Admin Dashboard APIs

Provides analytics data including:

* Total complaints
* Pending complaints
* Resolved complaints
* Total appointments
* Blog count
* Gallery count
* User count

Also includes complaint status analytics data for charts.

---

# 🗄️ Database

Database Used:

```
PostgreSQL
```

Database Name:

```
subhash_platform
```

Main Tables:

* users
* complaints
* complaint_images
* complaint_history
* blogs
* gallery
* appointments
<!-- * audit_logs -->

Database initialization:

```
database/init.sql
```

---

# 🐳 Running With Docker

Clone the repository:

```bash
git clone <repository-url>
```

Open project:

```bash
cd Subhash-Deshmukh
```

Build and start containers:

```bash
docker compose up --build
```

---

Backend container:

```
PORT: 5060
```

Local access:

```
http://localhost:8080
```

---

# ⚙️ Environment Variables

Create:

```
backend/.env
```

Example:

```
PORT=5060

DB_HOST=postgres
DB_USER=postgres
DB_PASSWORD=root
DB_NAME=subhash_platform
DB_PORT=5432

JWT_SECRET=your_secret_key

EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
```

---

# 📚 Documentation

Additional documentation:

```
docs/API.md

docs/ARCHITECTURE.md

docs/DATABASE.md
```

---

# 👨‍💻 Developer

**Om Shinde**

Full Stack Developer

---
