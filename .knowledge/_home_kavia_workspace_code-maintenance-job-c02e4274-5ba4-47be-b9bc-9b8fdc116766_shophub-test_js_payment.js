{
  "is_source_file": true,
  "format": "JavaScript",
  "description": "This file contains functions related to the checkout process in an online payment system, including handling of order placements and payment method selections.",
  "external_files": [
    "M.toast"
  ],
  "external_methods": [
    "M.toast"
  ],
  "published": [],
  "classes": [],
  "methods": [
    {
      "name": "orderPlacedOnline",
      "description": "Validates payment fields and places an online order if all fields are filled; otherwise, displays an error message."
    },
    {
      "name": "onlinePayChecked",
      "description": "Changes the display and color of labels when the online payment method is selected."
    },
    {
      "name": "codChecked",
      "description": "Changes the display and color of labels when the cash on delivery payment method is selected."
    },
    {
      "name": "orderPlacedCod",
      "description": "Displays a success message and redirects the user after a successful cash on delivery order placement."
    }
  ],
  "calls": [
    "document.getElementById",
    "M.toast",
    "window.location"
  ],
  "search-terms": [
    "payment",
    "order",
    "checkout"
  ],
  "state": 2,
  "file_id": 16,
  "knowledge_revision": 41,
  "git_revision": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695",
  "ctags": [],
  "filename": "/home/kavia/workspace/code-maintenance-job-c02e4274-5ba4-47be-b9bc-9b8fdc116766/shophub-test/js/payment.js",
  "hash": "4b83fc289d9dc3c83827b0cce6431ec0",
  "format-version": 4,
  "code-base-name": "b5939ej",
  "revision_history": [
    {
      "41": "8ecf70a2d94f9b4ec8eda32bcabeb66be35aa695"
    }
  ]
}