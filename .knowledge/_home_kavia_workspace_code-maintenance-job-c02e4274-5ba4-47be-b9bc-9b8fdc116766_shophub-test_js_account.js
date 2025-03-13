{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This JavaScript file handles user authentication state changes and orders management in a web application. It updates the UI with user information and orders, and handles order details and cancellation.",
  "external_files": [
    "firebase",
    "db"
  ],
  "external_methods": [
    "firebase.auth().onAuthStateChanged",
    "db.doc().onSnapshot",
    "db.doc().collection().onSnapshot",
    "db.doc().collection().doc().get",
    "db.doc().collection().doc().delete",
    "M.toast"
  ],
  "published": [
    "orderDetails",
    "accountOrders",
    "cancelOrders",
    "displayOrderDetail"
  ],
  "classes": [],
  "methods": [
    {
      "name": "accountOrders",
      "description": "Handles displaying user's orders in the account section.",
      "parameters": [
        "data"
      ],
      "returns": "void"
    },
    {
      "name": "orderDetails",
      "description": "Fetches and displays details for a specific order.",
      "parameters": [
        "orderId"
      ],
      "returns": "void"
    },
    {
      "name": "displayOrderDetail",
      "description": "Updates the order detail UI with the fetched order data.",
      "parameters": [
        "data"
      ],
      "returns": "void"
    },
    {
      "name": "cancelOrders",
      "description": "Cancels a specific order and updates the UI accordingly.",
      "parameters": [
        "id"
      ],
      "returns": "void"
    }
  ],
  "calls": [
    "firebase.auth().currentUser",
    "document.querySelector",
    "setInterval"
  ],
  "search-terms": [
    "user authentication",
    "order management",
    "Firebase integration",
    "UI updates"
  ],
  "state": 2,
  "file_id": 14,
  "knowledge_revision": 46,
  "git_revision": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695",
  "ctags": [],
  "filename": "/home/kavia/workspace/code-maintenance-job-c02e4274-5ba4-47be-b9bc-9b8fdc116766/shophub-test/js/account.js",
  "hash": "240d0f68c5fa62bfd44f881dfe909c09",
  "format-version": 4,
  "code-base-name": "b5939ej",
  "revision_history": [
    {
      "46": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695"
    }
  ]
}