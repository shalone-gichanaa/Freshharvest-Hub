// simple produce data for now
const produce = [
  { name: "Managu", price: 50 },
  { name: "Sweet Potatoes", price: 80 },
  { name: "Spinach", price: 40 },
  { name: "Spring Onions", price: 30 },
  { name: "Matoke", price: 100 },
  { name: "Sweet Bananas", price: 120 }
];


// display produce if we're on home page
const produceList = document.getElementById("produceList");

if (produceList) {
  displayProduce(produce);

  const searchInput = document.getElementById("searchInput");

  // filter items as user types
  searchInput.addEventListener("input", function () {
    const text = this.value.toLowerCase();

    const filtered = produce.filter(item =>
      item.name.toLowerCase().includes(text)
    );

    displayProduce(filtered);
  });
}

// function to show items
function displayProduce(items) {
  produceList.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>KES ${item.price}</p>
    `;

    produceList.appendChild(card);
  });
}


// vendor form
const vendorForm = document.getElementById("vendorForm");

if (vendorForm) {
  vendorForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = document.getElementById("vendorProduct").value;
    const qty = document.getElementById("vendorQty").value;

    const order = document.createElement("p");
    order.textContent = `Bulk order placed: ${product} (${qty}kg)`;

    document.getElementById("vendorOrders").appendChild(order);

    this.reset();
  });
}


// customer form
const customerForm = document.getElementById("customerForm");

if (customerForm) {
  customerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = document.getElementById("customerProduct").value;
    const qty = document.getElementById("customerQty").value;

    const order = document.createElement("p");
    order.textContent = `Order received: ${product} (${qty})`;

    document.getElementById("customerOrders").appendChild(order);

    this.reset();
  });
}
