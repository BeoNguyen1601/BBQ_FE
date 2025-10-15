// Lấy query string
const params = new URLSearchParams(window.location.search);
const id = params.get("idTable");

// Tìm element có id="idTable"
const idTable = document.getElementById("idTable");

// Set ID vào
if (idTable && id) {
  idTable.textContent = id;
}
