    function showNotification(message) {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      if (!email || !password) return;

      const notif = document.getElementById("notification");
      const msg = document.getElementById("notif-message");
      msg.innerText = message;
      notif.classList.remove("animate__fadeOut");
      notif.classList.add("animate__slideInDown");
      notif.style.top = '0';

      setTimeout(() => {
        notif.classList.remove("animate__slideInDown");
        notif.classList.add("animate__fadeOut");
        setTimeout(() => {
          notif.style.top = '-100px';
        }, 1000);
      }, 3000);
    }
