document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        db.ref("users/" + userId).set({ email, role }).then(() => {
          alert("Registration Successful! Please login.");
          window.location.href = "login.html";
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  