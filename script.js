function onOff() {
  let iconImage = document.getElementById('iconImage');
  let changeInput = document.getElementById('password');
  
  // Toggle the image source
  if (iconImage.src.includes('eye-close.png')) {
      iconImage.src = 'images/eye-open.png';
      changeInput.type = 'text';
  } else {
      iconImage.src = 'images/eye-close.png';
      changeInput.type = 'password';
  }
}