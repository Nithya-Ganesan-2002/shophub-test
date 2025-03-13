{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This file contains JavaScript code for managing a mobile phone browsing and cart system using Firebase as the backend. It includes functionality to fetch mobile phone data from a Firestore database, display it in a card format, enable adding items to a user's shopping cart, and handle a search feature.",
  "external_files": [
    "firebase.js"
  ],
  "external_methods": [
    "firebase.auth",
    "db.collection",
    "db.doc"
  ],
  "published": [
    "fetchMobilePhones",
    "addToCart"
  ],
  "classes": [],
  "methods": [
    {
      "name": "fetchMobilePhones",
      "description": "Fetches mobile phone data from the Firestore database and updates the UI to display the cards."
    },
    {
      "name": "addToCart",
      "description": "Adds a selected mobile phone item to the user's shopping cart in the Firestore database."
    }
  ],
  "calls": [
    "firebase.auth().currentUser",
    "db.collection('mobilePhones').orderBy('name', 'asc').onSnapshot",
    "db.collection('mobilePhones').where('brand', '==', '').onSnapshot",
    "M.toast"
  ],
  "search-terms": [
    "mobilePhones",
    "fetchMobilePhones",
    "addToCart",
    "usercart"
  ],
  "state": 2,
  "file_id": 19,
  "knowledge_revision": 40,
  "git_revision": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695",
  "ctags": [],
  "filename": "/home/kavia/workspace/code-maintenance-job-c02e4274-5ba4-47be-b9bc-9b8fdc116766/shophub-test/js/mobile.js",
  "hash": "772b3842ccbb147cf539243ac9c7bf13",
  "format-version": 4,
  "code-base-name": "b5939ej",
  "revision_history": [
    {
      "40": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695"
    }
  ]
}