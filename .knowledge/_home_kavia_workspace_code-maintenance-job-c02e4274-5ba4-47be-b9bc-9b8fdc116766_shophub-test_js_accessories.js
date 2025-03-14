{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This file handles the fetching and displaying of accessories from a Firestore database and provides functionality to add items to a user's cart.",
  "external_files": [
    "firebase",
    "materialize.css"
  ],
  "external_methods": [
    "firebase.auth().currentUser",
    "M.toast()"
  ],
  "published": [
    "addToCart"
  ],
  "classes": [],
  "methods": [
    {
      "name": "fetchAccessories",
      "description": "Fetches accessories data from Firestore and generates HTML to display them on the page."
    },
    {
      "name": "addToCart",
      "description": "Adds the selected accessory item to the user's shopping cart in Firestore."
    }
  ],
  "calls": [
    "db.collection(\"accessories\").onSnapshot",
    "db.doc(`users/${user.email}`).collection(\"usercart\").doc(`${name}`).get",
    "db.doc(`users/${user.email}`).collection(`usercart`).doc(`${name}`).set"
  ],
  "search-terms": [
    "accessories",
    "fetchAccessories",
    "addToCart"
  ],
  "state": 2,
  "file_id": 20,
  "knowledge_revision": 43,
  "git_revision": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695",
  "ctags": [],
  "filename": "/home/kavia/workspace/code-maintenance-job-c02e4274-5ba4-47be-b9bc-9b8fdc116766/shophub-test/js/accessories.js",
  "hash": "d2fd11d21f413e6df3e521a328e1cd63",
  "format-version": 4,
  "code-base-name": "b5939ej",
  "revision_history": [
    {
      "43": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695"
    }
  ]
}