function addProduct() {
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
  
    if (productName && productPrice) {
      var table = document.getElementById("productTable").getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
  
      cell1.innerHTML = productName;
      cell2.innerHTML = 'R$' + productPrice;
      cell3.innerHTML = '<button onclick="deleteProduct(this)">Excluir</button>';
      
      document.getElementById("productName").value = "";
      document.getElementById("productPrice").value = "";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  
function deleteProduct(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("productTable").deleteRow(i);
}
  
function clearFields() {
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
}