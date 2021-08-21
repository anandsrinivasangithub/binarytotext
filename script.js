var head = document.getElementsByTagName("head")[0];
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://code.jquery.com/jquery-latest.min.js";
script.onreadystatechange = handler;
script.onload = handler;

// Fire the loading
head.appendChild(script);

window.onload = () => {
  document.getElementById("copy-btn").setAttribute("disabled", "disabled");
};

function goButtonClicked() {
  const textValue = document.getElementById("textarea").value;

  function binaryAgent(str) {
    return str
      .split(" ")
      .map((x) => String.fromCharCode(parseInt(x, 2)))
      .join("");
  }
  let newString = binaryAgent(textValue);

  document.getElementById("resultingText").innerHTML = newString;
  document.getElementById("copy-btn").removeAttribute("disabled");
}

function copyText() {
  var text = document.getElementById("resultingText").innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.getElementById("copy-btn").value = "Close Curtain";
  document.body.removeChild(elem);
}
