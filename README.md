accessibility. You can choose to enable a more compact line height from the view settings menu.

‎README.md
+61
-1
Lines changed: 61 additions & 1 deletion


Original file line number	Diff line number	Diff line change
@@ -1 +1,61 @@
# Task-Manager-MIS
# 🗂️ Task Management System
A web-based task management system built using PHP, MySQL, and Bootstrap. Designed to help teams organize, assign, and monitor tasks efficiently. Includes separate dashboards for admins and users, real-time task status updates, and email notifications on task assignment.
---
## 📌 Features
- 🧑‍💼 **Admin Dashboard**
  - Add, edit, or delete users
  - Assign tasks with deadlines
  - View and manage all tasks
  - Send email notifications to users
- 👨‍💻 **User Dashboard**
  - View assigned tasks
  - Update task statuses: Pending, In Progress, Completed
  - View deadlines and task details
- 📧 **Email Notifications**
  - Sends automated emails to users upon task assignment using PHPMailer
- 💾 **Database Integration**
  - MySQL database for managing users and tasks
- 🎨 **Responsive UI**
  - Built with Bootstrap for a clean, responsive layout
---
## 🛠️ Technologies Used
- PHP (Procedural + OOP)
- MySQL
- Bootstrap 5
- PHPMailer
- JavaScript (for modal actions and interactions)
---
## ⚙️ Installation
### 🖥️ Localhost Setup
```bash
1. Clone the repo:
   git clone https://github.com/yourusername/task-management-system.git
2. Move it to your server directory:
   e.g., /var/www/html/task-management-system
3. Create a MySQL database:
   Import the `database.sql` file inside the `/db/` folder.
4. Configure database connection:
   Update `db_config.php` with your DB credentials.
5. Install PHPMailer (optional):
   Place PHPMailer files inside `/includes/PHPMailer/`
6. Launch in your browser:
   http://localhost/task-management-system/
