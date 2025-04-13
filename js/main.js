fetch('https://back-end-1-9yi1.onrender.com/products.php')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product-card';
      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>R${p.price}</p>
        <button onclick="order(${p.id})">Order</button>
      `;
      container.appendChild(div);
    });
  });

function order(id) {
  alert('Order functionality coming soon.');
}

/* js/auth.js */
document.getElementById('loginForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch('https://your-backend-url.onrender.com/login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message);
  if (result.success) {
    window.location.href = result.role === 'admin' ? 'admin_dashboard.html' : 'user_dashboard.html';
  }
});

document.getElementById('signupForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch('https://your-backend-url.onrender.com/signup.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message);
  if (result.success) window.location.href = 'login.html';
});
