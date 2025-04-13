auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "login.html";
      return;
    }
  
    const userId = user.uid;
    db.ref("users/" + userId).once("value").then((snapshot) => {
      const role = snapshot.val()?.role;
      if (role !== "admin") {
        window.location.href = "user-dashboard.html";
      }
    });
  });
  
  document.getElementById("logoutBtn").addEventListener("click", function () {
    auth.signOut().then(() => {
      localStorage.clear();
      window.location.href = "login.html";
    }).catch((error) => {
      alert("Logout failed: " + error.message);
    });
  });
  
  document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const price = parseFloat(document.getElementById("price").value);
    const image = document.getElementById("image").value;
    const productId = Date.now().toString();
  
    db.ref("products/" + productId).set({ title, price, image }).then(() => {
      alert("Product added!");
      displayProducts();
    });
  });
  
  function displayProducts() {
    const container = document.getElementById("productList");
    container.innerHTML = "";
  
    db.ref("products").once("value", (snapshot) => {
      snapshot.forEach((child) => {
        const data = child.val();
        const id = child.key;
  
        const card = document.createElement("div");
        card.innerHTML = `
          <h4>${data.title}</h4>
          <img src="${data.image}" width="100"><br>
          <p>Price: $${data.price}</p>
          <button onclick="deleteProduct('${id}')">Delete</button>
        `;
        container.appendChild(card);
      });
    });
  }
  
  function deleteProduct(id) {
    db.ref("products/" + id).remove().then(() => {
      alert("Product deleted");
      displayProducts();
    });
  }
  
  displayProducts();
  