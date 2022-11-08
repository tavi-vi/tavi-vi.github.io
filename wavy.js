window.onload = function() {
  let elements = document.getElementsByClassName("wavy")

  Array.prototype.forEach.call(elements, function(element){

    let text = element.textContent;

    element.innerHTML = text.split("")
      .map(letter => `<span class="">` + letter + `</span>`)
      .join("");

    var linebreakDelay = 0.05;
        lastDelay = -1,
        lastOffset = -1;
    Array.from(element.children).forEach((span, index) => {
      span.classList.add("wavy-animation");
      if (lastDelay<0 || lastOffset<0) {
        delay = 0;
      } else if(span.offsetLeft>lastOffset) {
        delay = lastDelay + (span.offsetLeft - lastOffset)/200;
      } else {
        delay = lastDelay + linebreakDelay;
      }
      lastDelay = delay
      lastOffset = span.offsetLeft

      span.style.cssText = "animation-delay: " + delay + "s;";
    });
  });
}
