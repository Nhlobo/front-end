function addToCart(productId) {
  const products = JSON.parse(localStorage.getItem("products"));
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function checkAuth(role = null) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Please sign in to continue.");
    window.location.href = "signin.html";
  } else if (role && user.role !== role) {
    alert("Unauthorized access.");
    window.location.href = "index.html";
  }
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", e => {
    const inputs = form.querySelectorAll("input[required]");
    for (let input of inputs) {
      if (!input.value.trim()) {
        alert(`Please fill in the ${input.name} field.`);
        e.preventDefault();
        return;
      }
    }
  });
}
