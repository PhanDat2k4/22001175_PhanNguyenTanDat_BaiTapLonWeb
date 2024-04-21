$(document).ready(function () {
    $('.addToCart').click(function () {
      var productImage = $(this).parent().parent().find('img').attr('src');
      var productName = $(this).parent().parent().find('h5').text();
      var productPrice = $(this).parent().parent().find('p').text();
  
      var product = {
        image: productImage,
        name: productName,
        price: productPrice,
        quantity: 1
      };
  
      var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      var existingProduct = cart.find(function (item) {
        return item.name === product.name;
      });
  
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push(product);
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
  
      $('#message').text('Thêm vào giỏ hàng thành công!');
      $('#message').removeClass('hidden');
      setTimeout(function () {
        $('#message').addClass('hidden');
      }, 2000);
    });
  });