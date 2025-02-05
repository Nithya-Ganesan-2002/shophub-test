{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This file handles user account functionalities in a shopping hub application, including displaying user details, managing orders, and allowing order cancellations.",
  "external_files": [
    "firebase",
    "db"
  ],
  "external_methods": [
    "firebase.auth()",
    "db.doc()",
    "collection()",
    "onSnapshot()",
    "get()",
    "delete()"
  ],
  "published": [
    "accountOrders"
  ],
  "classes": [],
  "methods": [
    {
      "name": "orderDetails",
      "description": "Retrieves order details based on the order ID and updates the UI accordingly."
    },
    {
      "name": "cancelOrders",
      "description": "Handles the order cancellation process, including confirming the cancellation and updating the database."
    },
    {
      "name": "displayOrderDetail",
      "description": "Displays detailed information about a specific order in the user interface."
    }
  ],
  "calls": [
    "firebase.auth().onAuthStateChanged",
    "db.doc().onSnapshot",
    "accountOrders",
    "document.querySelector"
  ],
  "search-terms": [
    "user account management",
    "order details",
    "cancel orders"
  ],
  "state": 2,
  "ctags": [],
  "filename": "/home/kavia/workspace/shophub-test/js/account.js",
  "hash": "240d0f68c5fa62bfd44f881dfe909c09",
  "format-version": 3,
  "code-base-name": "b0298sp"
}