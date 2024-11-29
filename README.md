# Role-Based Access Control (RBAC) Web Application  :
This project is a Role-Based Access Control (RBAC) system built using React.js and Tailwind CSS, designed to efficiently manage users and their roles. The application features an intuitive and visually appealing user interface while providing robust functionalities to add, edit, delete, and filter users and their roles.

## Features
 ### User Management
- Add Users: Create new users and assign roles to them.
- Edit Users: Update user information, including changing their assigned roles.
- Delete Users: Remove users from the system with ease.
### Role Management
- Add Roles: Define new roles as per system requirements.
- Edit Roles: Modify existing roles to fit changing needs.
- Delete Roles: Remove roles that are no longer needed.
### Filter Functionality
- Filter users by their assigned roles or other attributes to quickly find relevant information.
## Folder Structure :
rbac-frontend/
├── public/                   # Public files
│   ├── index.html            # Main HTML file
│   ├── favicon.ico           # Favicon
│   └── images/               # Static images
│       ├── logo.png
│       └── background.jpg
├── src/                      # Main source code
│   ├── assets/               # Static resources (e.g., icons, global styles)
│   │   ├── icons/            # SVG/PNG icons
│   │   ├── styles.css        # Global CSS or Tailwind utilities
│   │   └── constants.js      # Application-wide constants
│   ├── components/           # Reusable components and sections
│   │   ├── User/             # User-related components
│   │   │   ├── UserTable.jsx # Table to display users
│   │   │   ├── AddUser.jsx   # Form to add new users
│   │   │   └── EditUser.jsx  # Form to edit existing users
│   │   ├── Common/           # Shared components
│   │   │   ├── Navbar.jsx    # Navigation bar
│   │   │   ├── Footer.jsx    # Footer component
│   │   │   └── Sidebar.jsx   # Sidebar navigation
│   │   ├── Dashboard/        # Dashboard components
│   │   │   ├── StatsCard.jsx # Cards displaying key statistics
│   │   │   └── Overview.jsx  # Dashboard overview content
│   │   ├── Modal/            # Modal components for forms and actions
│   │   │   ├── AddModal.jsx  # Modal for adding entities
│   │   │   └── EditModal.jsx # Modal for editing entities
│   │   ├── Roles/            # Role-related components
│   │   │   ├── RolesTable.jsx # Table to display roles
│   │   │   ├── AddRole.jsx   # Form to add roles
│   │   │   └── EditRole.jsx  # Form to edit roles
│   │   └── Permission/       # Permission-related components
│       │   ├── PermissionTable.jsx # Table to display permissions
│       │   ├── AddPermission.jsx   # Form to add permissions
│       │   └── EditPermission.jsx  # Form to edit permissions
│   ├── pages/                # Page-level components
│   │   ├── LoginPage.jsx     # Login page
│   │   ├── SignupPage.jsx    # Signup page
│   │   ├── UserManagement.jsx # Main user management page
│   │   ├── RoleManagement.jsx # Main role management page
│   │   └── DashboardPage.jsx  # Main dashboard page
│   ├── App.jsx               # Root component
│   ├── index.js              # Entry point of the app
│   └── tailwind.config.js    # Tailwind CSS configuration
├── .env                      # Environment variables
├── .gitignore                # Git ignore file
├── package.json              # Project dependencies and scripts
├── README.md                 # Documentation file
└── yarn.lock / package-lock.json  # Lock file for package versions

## Responsive Design
Built with Tailwind CSS, the application is fully responsive and works seamlessly on all screen sizes.

# Project Snaps :
![Screenshot 2024-11-30 002732](https://github.com/user-attachments/assets/e6ab076d-5f1b-44d5-9f7a-aac3a75b6f68)
![Screenshot 2024-11-30 002825](https://github.com/user-attachments/assets/79f05f59-12e8-4319-852e-dcf020e79ff5)
![Screenshot 2024-11-30 002848](https://github.com/user-attachments/assets/e3b2ba50-2824-486d-8b6c-1132a54ba40e)
![Screenshot 2024-11-30 002903](https://github.com/user-attachments/assets/cc2f45bf-1900-43dd-b3cb-08d88d09845c)
![Screenshot 2024-11-30 002743](https://github.com/user-attachments/assets/9a3f19ca-2b58-4d6d-b19f-8c6a028aad15)
