document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        db.ref("users/" + userId).once("value").then(snapshot => {
          const role = snapshot.val().role;
          localStorage.setItem("role", role);
          if (role === "admin") {
            window.location.href = "admin-dashboard.html";
          } else {
            window.location.href = "user-dashboard.html";
          }
        });
      })
      .catch(() => {
        alert("Incorrect email or password!");
      });
  });
  