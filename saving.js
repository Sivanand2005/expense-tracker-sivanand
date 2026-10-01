const transactionForm = document.getElementById("transactionForm");

const typeInput = document.getElementById("type");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");

const transactionList = document.getElementById("transactionList");

const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const balance = document.getElementById("balance");

const typeFilter = document.getElementById("typeFilter");
const categoryFilter = document.getElementById("categoryFilter");

const submitBtn = document.getElementById("submitBtn");

const noTransactions = document.getElementById("noTransactions");

let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

let editId = null;

transactionForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const type = typeInput.value;
    const amount = Number(amountInput.value);
    const category = categoryInput.value;
    const date = dateInput.value;
    const description = descriptionInput.value;


    if (editId !== null) {

        transactions = transactions.map(function (transaction) {

            if (transaction.id === editId) {

                return {
                    id: editId,
                    type: type,
                    amount: amount,
                    category: category,
                    date: date,
                    description: description
                };

            }

            return transaction;

        });

        editId = null;

        submitBtn.textContent = "Add Transaction";

    } else {

        const transaction = {

            id: Date.now(),

            type: type,

            amount: amount,

            category: category,

            date: date,

            description: description

        };

        transactions.push(transaction);

    }

    saveTransactions();

    displayTransactions();

    updateSummary();

    transactionForm.reset();

});

function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

}

function displayTransactions() {

    transactionList.innerHTML = "";

    const selectedType = typeFilter.value;
    const selectedCategory = categoryFilter.value;


    const filteredTransactions = transactions.filter(function (transaction) {

        const typeMatch =
            selectedType === "all" ||
            transaction.type === selectedType;

        const categoryMatch =
            selectedCategory === "all" ||
            transaction.category === selectedCategory;

        return typeMatch && categoryMatch;

    });


    if (filteredTransactions.length === 0) {

        noTransactions.style.display = "block";

        return;

    }

    noTransactions.style.display = "none";


    filteredTransactions.forEach(function (transaction) {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td class="${transaction.type}">
                ${transaction.type.toUpperCase()}
            </td>

            <td>
                ₹${transaction.amount.toFixed(2)}
            </td>

            <td>
                ${transaction.category}
            </td>

            <td>
                ${transaction.date}
            </td>

            <td>
                ${transaction.description}
            </td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editTransaction(${transaction.id})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTransaction(${transaction.id})">
                    Delete
                </button>

            </td>

        `;


        transactionList.appendChild(row);

    });

}

function updateSummary() {

    let income = 0;
    let expense = 0;


    transactions.forEach(function (transaction) {

        if (transaction.type === "income") {

            income += transaction.amount;

        } else {

            expense += transaction.amount;

        }

    });


    const currentBalance = income - expense;


    totalIncome.textContent =
        "₹" + income.toFixed(2);

    totalExpense.textContent =
        "₹" + expense.toFixed(2);

    balance.textContent =
        "₹" + currentBalance.toFixed(2);

}

function deleteTransaction(id) {

    const confirmation =
        confirm("Are you sure you want to delete this transaction?");


    if (!confirmation) {
        return;
    }


    transactions = transactions.filter(function (transaction) {

        return transaction.id !== id;

    });


    saveTransactions();

    displayTransactions();

    updateSummary();

}


// Edit transaction

function editTransaction(id) {

    const transaction =
        transactions.find(function (transaction) {

            return transaction.id === id;

        });


    if (!transaction) {
        return;
    }


    typeInput.value = transaction.type;

    amountInput.value = transaction.amount;

    categoryInput.value = transaction.category;

    dateInput.value = transaction.date;

    descriptionInput.value = transaction.description;


    editId = id;

    submitBtn.textContent = "Update Transaction";

    document.querySelector(".form-container")
        .scrollIntoView({
            behavior: "smooth"
        });

}

typeFilter.addEventListener(
    "change",
    displayTransactions
);

categoryFilter.addEventListener(
    "change",
    displayTransactions
);

displayTransactions();

updateSummary();