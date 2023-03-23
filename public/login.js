function login() {
    const userName = document.querySelector("#name");
    localStorage.setItem("userName", userName.value);
    window.location.href = "play.html";
  }
  