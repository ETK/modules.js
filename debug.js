
function message(msg,div) {
  var msgs = document.getElementById(div||'messages');
  msgs.appendChild(document.createTextNode(msg));
  msgs.appendChild(document.createElement("br"));
}

