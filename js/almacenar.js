document.addEventListener('DOMContentLoaded', function () {
  const contenedor = document.getElementById('contenedor');
  const items = JSON.parse(localStorage.getItem('items')) || [];
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item;
    contenedor.appendChild(li);
  });

  const agregarBtn = document.getElementById('agregar');
  agregarBtn.addEventListener('click', function () {
    const itemInput = document.getElementById('item');
    const newItem = itemInput.value.trim();
    if (newItem !== '') {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = newItem;
      contenedor.appendChild(li);

      items.push(newItem);
      localStorage.setItem('items', JSON.stringify(items));

      itemInput.value = '';
    }
  });

  const limpiarBtn = document.getElementById('limpiar');
  limpiarBtn.addEventListener('click', function () {
    contenedor.innerHTML = '';
    localStorage.removeItem('items');
    items.length = 0; // Limpiar el array
  });
});

  