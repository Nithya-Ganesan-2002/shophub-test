{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This file handles the functionality for displaying mobile phone products from a database, including fetching mobile phone data, adding items to a cart, and searching for mobile phones based on the brand.",
  "external_files": [],
  "external_methods": [
    "firebase.auth",
    "M.toast"
  ],
  "published": [
    "fetchMobilePhones",
    "addToCart"
  ],
  "classes": [],
  "methods": [
    {
      "name": "fetchMobilePhones",
      "description": "Fetches mobile phone data from the database and updates the HTML content with the details of each mobile phone."
    },
    {
      "name": "addToCart",
      "description": "Adds a selected mobile phone to the user's shopping cart after checking the user's authentication status and existing items in the cart."
    }
  ],
  "calls": [
    "db.collection(\"mobilePhones\").orderBy",
    "db.collection(\"mobilePhones\").where"
  ],
  "search-terms": [
    "mobilePhones",
    "fetchMobilePhones",
    "addToCart"
  ],
  "state": 2,
  "ctags": [],
  "filename": "/home/kavia/workspace/shophub-test/js/mobile.js",
  "hash": "772b3842ccbb147cf539243ac9c7bf13",
  "format-version": 3,
  "code-base-name": "b0298sp"
}