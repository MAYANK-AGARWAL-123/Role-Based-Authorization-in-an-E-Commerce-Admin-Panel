auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "login.html";
      return;
    }
  
    const userId = user.uid;
    db.ref("users/" + userId).once("value").then((snapshot) => {
      const role = snapshot.val()?.role;
      if (role !== "user") {
        window.location.href = "admin-dashboard.html";
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
  
  function displayProducts() {
    const container = document.getElementById("productList");
    container.innerHTML = "";
  
    db.ref("products").once("value", (snapshot) => {
      snapshot.forEach((child) => {
        const data = child.val();
  
        const card = document.createElement("div");
        card.innerHTML = `
          <h4>${data.title}</h4>
          <img src="${data.image}" width="100"><br>
          <p>Price: $${data.price}</p>
          <hr>
        `;
        container.appendChild(card);
      });
    });
  }
  
  displayProducts();
  