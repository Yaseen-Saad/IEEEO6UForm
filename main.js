let change = document.querySelectorAll(
  "body main > div > div:nth-child(1) > p"
);

change.forEach(
  (ele) =>
    (ele.onclick = () => {
      ele.innerHTML == "Sign In"
        ? ((document.forms[0].style.display = "none"),
          (document.forms[1].style.display = "flex"))
        : ((document.forms[0].style.display = "flex"),
          (document.forms[1].style.display = "none"));
    })
);
