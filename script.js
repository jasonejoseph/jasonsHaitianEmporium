const customers = [];

document.getElementById("customerForm") .addEventListener("submit", function(event) {

    event.preventDefault();

    const customer = {

        id: Date.now(),

        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        favoriteCategory:
            document.getElementById("favorite").value
    };

    customers.push(customer);

        const customerList = document.getElementById("customerList");
        const newCustomer = document.createElement("li");
        newCustomer.textContent =
            customer.name + " - " + customer.email;
        customerList.appendChild(newCustomer);

    console.clear();

    console.log("Customer Array:");
    console.table(customers);

    alert("Customer successfully added!");

    form.reset();


});