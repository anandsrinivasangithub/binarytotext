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

  document.getElementById("textareayuh").innerHTML = newString;
  document.getElementById("copy-btn").removeAttribute("disabled");
}

function copyText() {
  document.getElementById("copy-btn").innerHTML = "Copied!";
  document.getElementById("copy-btn").className = "btn btn-success";
  var text = document.getElementById("textareayuh").innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}
