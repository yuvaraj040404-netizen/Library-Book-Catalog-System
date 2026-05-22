# 📚 Central Library Management System

A modern web application built to manage a book catalog, track book availability, and easily register new entries. This project consists of a full-stack architecture utilizing a Spring Boot REST API for the backend data layer and an Angular frontend dashboard.

---

## 🛠️ Tech Stack

* **Frontend:** Angular 21, TypeScript, HTML5, CSS3
* **Backend:** Spring Boot, Java, Spring Data JPA, Hibernate
* **Database:** MySQL

---

## 🚀 Features

* **Live Catalog Dashboard:** View all books registered in the system along with their real-time availability status.
* **Book Registration Form:** Seamlessly add new titles, authors, genres, and unique ISBN numbers to the main database.
* **Dynamic Client Routing:** Quick fluid transitions across pages via Angular standalone routing engines.
* **CORS Integration:** Fully secured communication pipe between independent server domains.

---

## 📦 Local Setup Instructions

### 1. Prerequisites
Ensure you have the following tools installed locally on your machine:
* Node.js (v20+ recommended)
* Java JDK (v17 or higher)
* MySQL Server

### 2. Database Creation
Before launching the server applications, open your MySQL terminal or MySQL Workbench and run:
```sql
CREATE DATABASE library;
