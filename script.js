window.onload = () => {
  document.getElementById("copy-btn").setAttribute("disabled", "disabled");
};

function convertToBinary() {
  const textValue = document.getElementById("textarea").value;

  function binaryConverter(str) {
    return str
      .split(" ")
      .map((x) => String.fromCharCode(parseInt(x, 2)))
      .join("");
  }
  let newString = binaryConverter(textValue);

  document.getElementById("textareayuh").innerHTML = newString;
  document.getElementById("copy-btn").removeAttribute("disabled");
  document
    .getElementById("notacopybtnbutimoitsjustasgoodrightsfornoncopybuttons")
    .removeAttribute("disabled");
}

function copyText() {
  var copyText = document.getElementById("textareayuh");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.getElementById("copy-btn").innerHTML = "Copied!";
  document.getElementById("copy-btn").className = "btn btn-success";
  setTimeout(function () {
    document.getElementById("copy-btn").innerHTML = "Copy Text";
    document.getElementById("copy-btn").className = "btn btn-secondary";
  }, 5000);
}
