window.onload = function() {
  document.body.className = 'loaded';
};

function showContact() {
  if ( document.getElementById('contact').className.match(/(?:^|\s)show(?!\S)/) ) {
    document.getElementById("contact").className = "hide";
  } else {
    document.getElementById("contact").className = "show";
  }
};