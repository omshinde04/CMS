# System Architecture


Project:

Leader Digital Platform


Architecture:

```text

Citizen Website

       |

       v


Next.js Frontend


       |

REST API


       |

Node.js + Express


       |

PostgreSQL Database



Admin Dashboard

       |

       v

REST API

```


## Backend Pattern


The backend follows modular MVC architecture.


Structure:


```text

routes

   ↓

controllers

   ↓

database layer

   ↓

PostgreSQL

```



## Security


Implemented:

- JWT Authentication

- bcrypt Password Hashing

- Role Based Access Control

- Protected Admin APIs



## Roles


Super Admin:

Full Access


Admin:

Manage Operations


Content Manager:

Blogs + Gallery


Complaint Manager:

Complaints Handling



## Deployment


Application is containerized using Docker.


Services:


- Backend Container

- PostgreSQL Container


Docker Compose manages networking.
