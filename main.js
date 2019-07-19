fetch("./server.php")
  .then(response => response.json())
  .then(json => {
    json = json.slice(0, 10);
    let html = "";
    json.forEach((media, index) => {
      switch (media.extension) {
        case "jpg":
        case "jpeg":
        case "png":
          html += `<div class="carousel-item"><img src="${media.dirname + "/" + media.basename}" alt="${media.filename}"/></div>`;
          break;
        case "mp4":
          html += `<div class="carousel-item"><video controls><source src="${media.dirname + "/" + media.basename}" type="video/mp4" />Your browser does not support HTML5 video.</video></div>`;
          break;
        default:
        // none
      }
    });
    console.log(html);
    document.querySelector(".carousel-body").innerHTML = html;
    let navs = document.querySelectorAll("[type='radio']");
    navs.forEach((el, index) => {
      el.remove();
    });
    let radio = "";
    let label = "";
    let length = json.length;
    for (let i = 1; i <= length; i++) {
      radio += `<input type="radio" name="navigator" id="slide-${i}" class="carousel-navigation-button" />`;
      label += `<label for="slide-${i}"></label>`;
    }
    console.log(document.querySelectorAll(".carousel-target-button"));
    document.querySelector(".carousel-body").insertAdjacentHTML("beforebegin", radio);
    let btns = document.querySelectorAll(".carousel-target-button");
    btns[0].innerHTML = label;
    btns[1].innerHTML = label;
  });
