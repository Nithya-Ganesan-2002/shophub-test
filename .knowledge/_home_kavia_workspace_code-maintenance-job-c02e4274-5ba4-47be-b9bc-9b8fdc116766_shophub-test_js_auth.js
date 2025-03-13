{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This file contains code to manage user authentication and their shopping cart functionalities in a web application using Firebase.",
  "external_files": [
    "firebase.js",
    "db.js",
    "M.js"
  ],
  "external_methods": [
    "firebase.auth()",
    "db.collection()",
    "M.toast()"
  ],
  "published": [
    "auth",
    "firebase",
    "db"
  ],
  "classes": [],
  "methods": [
    {
      "name": "removeItem",
      "description": "Removes an item from the user's cart in the database and updates the UI."
    },
    {
      "name": "setupUI",
      "description": "Updates the UI based on user's authentication status."
    },
    {
      "name": "fetchCart",
      "description": "Fetches user's cart details from the database and updates the UI."
    },
    {
      "name": "forgetpass",
      "description": "Displays the reset password form."
    },
    {
      "name": "backToLogin",
      "description": "Switches back to the login form from the reset password form."
    },
    {
      "name": "newUser",
      "description": "Switches to the signup form."
    },
    {
      "name": "oldUser",
      "description": "Switches back to the signin form."
    }
  ],
  "calls": [
    "firebase.auth().onAuthStateChanged",
    "db.doc().collection().onSnapshot",
    "db.doc().delete",
    "db.doc().set",
    "auth.createUserWithEmailAndPassword",
    "auth.signOut",
    "auth.signInWithEmailAndPassword",
    "db.collection().onSnapshot",
    "M.Modal.init",
    "M.Collapsible.init",
    "firebase.auth().sendPasswordResetEmail"
  ],
  "search-terms": [
    "authentication",
    "shopping cart",
    "Firebase",
    "user management",
    "signup",
    "login"
  ],
  "state": 2,
  "file_id": 17,
  "knowledge_revision": 44,
  "git_revision": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695",
  "ctags": [],
  "filename": "/home/kavia/workspace/code-maintenance-job-c02e4274-5ba4-47be-b9bc-9b8fdc116766/shophub-test/js/auth.js",
  "hash": "1241d973bc7938bf5a1230e1622fe4c7",
  "format-version": 4,
  "code-base-name": "b5939ej",
  "revision_history": [
    {
      "44": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695"
    }
  ]
}