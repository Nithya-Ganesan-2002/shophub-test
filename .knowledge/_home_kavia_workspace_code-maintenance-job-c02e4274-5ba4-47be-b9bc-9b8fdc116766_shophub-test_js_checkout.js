{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This file contains the checkout form validation logic, handling user authentication with Firebase, updating user data in Firestore, and fetching items from the user's cart.",
  "external_files": [
    "firebase"
  ],
  "external_methods": [
    "firebase.auth().currentUser",
    "firebase.firestore.FieldValue.serverTimestamp()",
    "db.doc().collection().doc().set()",
    "db.doc().collection().get()",
    "userDoc.collection().add()",
    "userDoc.collection().doc().delete()",
    "db.doc().collection().onSnapshot()"
  ],
  "published": [
    "proceedPayment",
    "checkoutCart",
    "fetchCheckoutCart"
  ],
  "classes": [],
  "methods": [
    {
      "name": "proceedPayment",
      "description": "Validates checkout form fields and updates user address info to Firestore. Proceeds to the payment page after validation."
    },
    {
      "name": "fetchCheckoutCart",
      "description": "Fetches the user's cart items from Firestore and updates the checkout cart display."
    }
  ],
  "calls": [
    "firebase.auth().onAuthStateChanged",
    "db.doc().collection().onSnapshot",
    "checkoutCart.innerHTML"
  ],
  "search-terms": [
    "checkout",
    "payment",
    "validation",
    "user cart"
  ],
  "state": 2,
  "file_id": 15,
  "knowledge_revision": 42,
  "git_revision": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695",
  "ctags": [],
  "filename": "/home/kavia/workspace/code-maintenance-job-c02e4274-5ba4-47be-b9bc-9b8fdc116766/shophub-test/js/checkout.js",
  "hash": "ca99011d66a85164e1fb9976e99e44c9",
  "format-version": 4,
  "code-base-name": "b5939ej",
  "revision_history": [
    {
      "42": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695"
    }
  ]
}