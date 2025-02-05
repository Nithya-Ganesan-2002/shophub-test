{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This file contains functionalities for fetching and displaying accessories from a database, as well as adding items to a user's cart in an e-commerce application.",
  "external_files": [],
  "external_methods": [
    "firebase.auth",
    "M.toast"
  ],
  "published": [],
  "classes": [],
  "methods": [
    {
      "name": "fetchAccessories",
      "description": "Fetches accessory data from Firestore, constructs HTML for each accessory, and updates the accessories container in the DOM."
    },
    {
      "name": "addToCart",
      "description": "Adds an accessory to the user's cart in Firestore, checking if the user is signed in and if the item is already in the cart."
    }
  ],
  "calls": [
    "db.collection.onSnapshot",
    "fetchAccessories",
    "firebase.auth.currentUser",
    "db.doc.get",
    "db.doc.set"
  ],
  "search-terms": [
    "fetchAccessories",
    "addToCart",
    "accessories"
  ],
  "state": 2,
  "ctags": [],
  "filename": "/home/kavia/workspace/shophub-test/js/accessories.js",
  "hash": "d2fd11d21f413e6df3e521a328e1cd63",
  "format-version": 3,
  "code-base-name": "b0298sp"
}