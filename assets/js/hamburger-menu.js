$$('#hamburger-menu a').forEach(function(el) {
  el.addEventListener('click', function() {
    $('#hamburger-menu-button input').checked = false;
    $('#hamburger-menu').style.display = 'none';
  });
});

$('#hamburger-menu-button input').addEventListener('click', function() {
  if($('#hamburger-menu-button input').checked) {
    $('#hamburger-menu').style.display = 'block';
  } else {
    $('#hamburger-menu').style.display = 'none';
  }
});
