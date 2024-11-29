import man1 from "./man1.jpg";
import man2 from "./man2.jpg";
import man3 from "./man3.jpg";
import man4 from "./man4.jpg";
import man5 from "./man5.jpg";
import man6 from "./man6.jpg";
import man7 from "./man7.jpg";
import man8 from "./man8.jpg";
import man9 from "./man9.jpg";
import woman1 from "./woman1.jpg";
import woman2 from "./woman2.jpg";
import woman3 from "./woman3.jpg";

export const users = [
  {
    userId: 1,
    name: "Shiv",
    email: "shiv@gmail.com",
    role: "Admin",
    status: "Active",
    created: "2010-01-01",
    image: man1,
  },
  {
    userId: 2,
    name: "Aarav",
    email: "aarav@gmail.com",
    role: "User",
    status: "Inactive",
    created: "2015-05-12",
    image: man2,
  },
  {
    userId: 3,
    name: "Maya",
    email: "maya@gmail.com",
    role: "Moderator",
    status: "Active",
    created: "2018-03-23",
    image: woman1,
  },
  // {
  //   userId: 4,
  //   name: "Ananya",
  //   email: "ananya@gmail.com",
  //   role: "User",
  //   status: "Pending",
  //   created: "2020-07-15",
  //   image: woman2,
  // },
  {
    userId: 5,
    name: "Kabir",
    email: "kabir@gmail.com",
    role: "Admin",
    status: "Active",
    created: "2012-11-02",
    image: man3,
  },
  {
    userId: 6,
    name: "Zoya",
    email: "zoya@gmail.com",
    role: "User",
    status: "Inactive",
    created: "2019-09-27",
    image: woman3,
  },
  {
    userId: 7,
    name: "Rohan",
    email: "rohan@gmail.com",
    role: "User",
    status: "Active",
    created: "2021-01-10",
    image: man4,
  },
  // {
  //   userId: 8,
  //   name: "Priya",
  //   email: "priya@gmail.com",
  //   role: "Moderator",
  //   status: "Pending",
  //   created: "2017-04-08",
  //   image: woman4,
  // },
  {
    userId: 9,
    name: "Aditya",
    email: "aditya@gmail.com",
    role: "Admin",
    status: "Active",
    created: "2011-09-19",
    image: man5,
  },
  // {
  //   userId: 10,
  //   name: "Meera",
  //   email: "meera@gmail.com",
  //   role: "User",
  //   status: "Inactive",
  //   created: "2013-12-24",
  //   image: woman5,
  // },
  // {
  //   userId: 11,
  //   name: "Nikhil",
  //   email: "nikhil@gmail.com",
  //   role: "User",
  //   status: "Active",
  //   created: "2016-02-28",
  //   image: man6,
  // },
  // {
  //   userId: 12,
  //   name: "Sanya",
  //   email: "sanya@gmail.com",
  //   role: "Moderator",
  //   status: "Active",
  //   created: "2014-06-17",
  //   image: woman6,
  // },
  // {
  //   userId: 13,
  //   name: "Aryan",
  //   email: "aryan@gmail.com",
  //   role: "User",
  //   status: "Pending",
  //   created: "2022-03-05",
  //   image: man7,
  // },
  // {
  //   userId: 14,
  //   name: "Diya",
  //   email: "diya@gmail.com",
  //   role: "Admin",
  //   status: "Active",
  //   created: "2018-10-11",
  //   image: woman6,
  // },
  // {
  //   userId: 15,
  //   name: "Karan",
  //   email: "karan@gmail.com",
  //   role: "User",
  //   status: "Inactive",
  //   created: "2023-07-22",
  //   image: man8,
  // },
];


export const roles = [
  {
    Id: 1,
    rolename: "Admin",
    description:
      "Has full access to all resources and can manage all users and data.",
    permissions: {
      read: true,
      write: true,
      delete: true,
      manageRoles: true,
      viewAnalytics: true,
    },
  },
  {
    Id: 2,
    rolename: "User",
    description:
      "Can read and write their own data, but cannot modify others' data.",
    permissions: {
      read: true,
      write: false,
      delete: false,
      manageRoles: false,
      viewAnalytics: true,
    },
  },
  {
    Id: 3,
    rolename: "Manager",
    description:
      "Can manage users, assign roles, and view reports, but cannot delete data.",
    permissions: {
      read: true,
      write: true,
      delete: false,
      manageRoles: false,
      viewAnalytics: true,
    },
  },
  // {
  //   Id: 4,
  //   rolename: "Guest",
  //   description:
  //     "Has limited access to view content but cannot make changes or access sensitive data.",
  //   permissions: {
  //     read: true,
  //     write: true,
  //     delete: false,
  //     manageRoles: false,
  //     viewAnalytics: false,
  //   },
  // },
  // {
  //   Id: 5,
  //   rolename: "Moderator",
  //   description:
  //     "Can moderate user-generated content and manage user activities.",
  //   permissions: {
  //     read: true,
  //     write: true,
  //     delete: false,
  //     manageRoles: true,
  //     viewAnalytics: false,
  //   },
  // },
  {
    Id: 4,
    rolename: "Super Admin",
    description:
      "Has the highest level of access, can perform any action across the platform, including system-level management.",
    permissions: {
      read: true,
      write: true,
      delete: false,
      manageRoles: false,
      viewAnalytics: false,
    },
  },
];

export const permissions = [
  {
    id: 1,
    permission: "Read",
    description: "Allows reading of data",
  },
  {
    id: 2,
    permission: "Write",
    description: "Allows writing of data",
  },
  {
    id: 3,
    permission: "Execute",
    description: "Allows execution of operations",
  },
  // {
  //   id: 4,
  //   permission: "Delete",
  //   description: "Allows deletion of records",
  // },
  // {
  //   id: 5,
  //   permission: "Admin",
  //   description: "Full administrative permissions",
  // },
  // {
  //   id: 6,
  //   permission: "View Reports",
  //   description: "Permission to view reports",
  // },
];
