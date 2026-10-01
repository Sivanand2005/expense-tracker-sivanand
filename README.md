#  Expense Tracker

A responsive **Expense Tracker web application** built using **HTML, CSS, and JavaScript**. It allows users to manage their income and expenses, view their current balance, filter transactions, and store transaction data using the browser's Local Storage.

##  Features

*  Add income and expense transactions
*  Enter transaction amount
*  Select transaction category
*  Select transaction date
*  Add transaction description
*  Edit existing transactions
*  Delete transactions
*  View total income
*  View total expenses
*  View current balance
*  Filter transactions by:

  * Income
  * Expense
  * Category
* Save transactions using browser Local Storage
* Data remains available after refreshing the page
* Responsive design for desktop and mobile screens

##  Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive layout
* **JavaScript** – Application logic and DOM manipulation
* **Local Storage** – Persistent browser-side data storage

## Project Structure

```text
Expense-Tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

The application follows this basic workflow:

```text
User enters transaction
        ↓
JavaScript collects the data
        ↓
Transaction is added to an array
        ↓
Data is saved in Local Storage
        ↓
Transactions are displayed
        ↓
Income and expenses are calculated
        ↓
Current balance is displayed
```

### Balance Calculation

The current balance is calculated using:

```text
Current Balance = Total Income - Total Expenses
```

For example:

```text
Total Income     = ₹30,000
Total Expenses   = ₹5,000
Current Balance  = ₹25,000
```

## Local Storage

The application uses browser Local Storage to save transaction data.

This means transactions remain available even after:

* Refreshing the page
* Closing and reopening the browser

The data is stored locally in the user's browser.

## Responsive Design

The application is designed to work on:

* Desktop
* Laptop
* Mobile
* Tablet

CSS media queries are used to adjust the layout for smaller screens.

## How to Run

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

Open the project folder in **Visual Studio Code**.

### 3. Run the application

Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code.

## Future Improvements

Possible improvements for future versions:

* Add expense charts and graphs
* Monthly and yearly reports
* Search transactions
* Dark mode
* Export transactions to CSV or PDF
* User authentication
* Cloud database storage
* Multiple currency support

## Author

**Sivanand A**

## License

This project is created for learning and educational purposes.
