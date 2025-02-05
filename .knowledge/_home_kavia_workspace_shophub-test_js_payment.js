{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This file contains functions for handling online and COD payment processing in a checkout form, including field validation and user feedback.",
  "external_files": [],
  "external_methods": [
    "M.toast",
    "document.getElementById"
  ],
  "published": [
    "orderPlacedOnline",
    "onlinePayChecked",
    "codChecked",
    "orderPlacedCod"
  ],
  "classes": [],
  "methods": [
    {
      "name": "orderPlacedOnline",
      "description": "Handles online order placement, validates form fields, displays a success toast, and redirects to the index page."
    },
    {
      "name": "onlinePayChecked",
      "description": "Updates the payment form to show online payment options and hides COD payment options."
    },
    {
      "name": "codChecked",
      "description": "Updates the payment form to show COD payment options and hides online payment options."
    },
    {
      "name": "orderPlacedCod",
      "description": "Handles order placement for COD, displays a success toast, and redirects to the index page."
    }
  ],
  "calls": [
    "document.getElementById",
    "M.toast"
  ],
  "search-terms": [
    "payment processing",
    "checkout form",
    "order placement"
  ],
  "state": 2,
  "ctags": [],
  "filename": "/home/kavia/workspace/shophub-test/js/payment.js",
  "hash": "4b83fc289d9dc3c83827b0cce6431ec0",
  "format-version": 3,
  "code-base-name": "b0298sp"
}