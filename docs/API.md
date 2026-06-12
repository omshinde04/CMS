# Leader Digital Platform API Documentation


Base URL

Development:

```text
http://localhost:8080/api
```


## Authentication Module


### Register Admin

Endpoint:

POST

/api/auth/register


Request:

```json
{
"name":"Admin",
"email":"admin@gmail.com",
"password":"admin123",
"role":"super_admin"
}
```


Response:

```json
{
"message":"User created successfully"
}
```


Roles Supported:

- super_admin
- admin
- content_manager
- complaint_manager



---


### Login


Endpoint:

POST

/api/auth/login


Request:

```json
{
"email":"admin@gmail.com",
"password":"admin123"
}
```


Response:

```json
{
"token":"jwt_token"
}
```



---


# Complaint Module


## Create Complaint

Public API


POST

/api/complaints


Body:

multipart/form-data


Fields:

```text
citizen_name
phone
email
category
title
description
images
```


Response:

```json
{
"trackingId":"COMP-123456"
}
```


---


## Track Complaint


GET


/api/complaints/track/{complaintId}



---


## Admin View Complaints


GET


/api/complaints/admin/all


Auth:

Bearer Token Required



---


## Update Complaint Status


PATCH


/api/complaints/status/{id}


Request:

```json
{
"status":"Resolved",
"remark":"Issue completed"
}
```



---


# Blog CMS


## Get Blogs


GET

/api/blogs



---


## Create Blog


POST

/api/blogs


Protected:

Roles:

super_admin

content_manager


Fields:

```text
title
slug
content
image
```



---


## Delete Blog


DELETE

/api/blogs/{id}




---


# Gallery CMS


## Get Gallery


GET

/api/gallery



---


## Upload Gallery


POST

/api/gallery


Fields:

```text
title
category
image
```



---


# Appointment Module



## Create Appointment


POST

/api/appointments


Request:

```json
{
"name":"Rahul",
"phone":"9876543210",
"email":"test@gmail.com",
"reason":"Meeting",
"date":"2026-06-20"
}
```



---


## Get Appointments


GET


/api/appointments/admin/all



---


## Update Appointment Status


PATCH


/api/appointments/status/{id}


Request:

```json
{
"status":"Approved"
}
```




---


# Dashboard


## Analytics


GET

/api/dashboard/stats



Response:

```json
{
"complaints":100,
"blogs":20,
"appointments":10
}
```



## Complaint Chart


GET

/api/dashboard/complaints-chart
