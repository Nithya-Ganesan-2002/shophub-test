{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This file contains the checkout form validation logic for a web application, handling user inputs, Firebase authentication, and saving cart information to the database.",
  "external_files": [
    "firebase"
  ],
  "external_methods": [
    "firebase.auth().currentUser",
    "db.doc().collection().doc().set()",
    "db.doc().collection().get()",
    "userDoc.collection().add()",
    "userDoc.collection().doc().delete()",
    "firebase.auth().onAuthStateChanged()",
    "db.doc().collection().onSnapshot()"
  ],
  "published": [
    "proceedPayment",
    "fetchCheckoutCart"
  ],
  "classes": [],
  "methods": [
    {
      "name": "proceedPayment",
      "description": "Validates input fields on checkout and saves user address info to the database, while moving items from the cart to orders upon payment."
    },
    {
      "name": "fetchCheckoutCart",
      "description": "Retrieves the user's cart items from the database and updates the checkout display with the current cart's contents."
    }
  ],
  "calls": [
    "firebase.auth().currentUser",
    "db.doc(`users/${user.email}`).collection(`userAddressInfo`).doc().set()",
    "db.doc(`users/${user.email}`).collection(`usercart`).get()",
    "userDoc.collection(`orders`).add()",
    "userDoc.collection(`usercart`).doc(items[i].name).delete()",
    "db.doc(`users/${user.email}`).collection(`usercart`).onSnapshot()"
  ],
  "search-terms": [
    "checkout validation",
    "user authentication",
    "cart management"
  ],
  "state": 2,
  "ctags": [],
  "filename": "/home/kavia/workspace/shophub-test/js/checkout.js",
  "hash": "ca99011d66a85164e1fb9976e99e44c9",
  "format-version": 3,
  "code-base-name": "b0298sp"
}