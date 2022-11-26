window.onload = function() {
  let elements = document.getElementsByClassName("wavy")

  Array.prototype.forEach.call(elements, function(element){

    let text = element.textContent;
    element.ariaHidden = true;
    alt = document.createElement('em');
    alt.textContent = text;
    alt.classList.add("screen-reader-only");
    alt.classList.add("no-select");
    element.insertAdjacentElement('afterend', alt);

    while (element.firstChild) {
      element.removeChild(element.lastChild);
    }

    for(c of text) {
      let runeSpan = document.createElement('span');
      runeSpan.textContent = c;
      element.appendChild(runeSpan);
    }

    var linebreakDelay = 0.04;
        lastDelay = -1,
        lastOffset = -1;
	lastCenter = -1;
    Array.from(element.children).forEach((span, index) => {
      span.classList.add("wavy-animation");
      center = span.offsetLeft+span.offsetWidth/2;
      if (lastDelay<0 || lastOffset<0 || lastCenter<0) {
        delay = 0;
      } else if(span.offsetLeft>lastOffset) {
        delay = lastDelay + (center - lastCenter)/(11.5*span.offsetHeight);
      } else {
        delay = lastDelay + linebreakDelay;
      }
      lastDelay = delay;
      lastOffset = span.offsetLeft;
      lastCenter = center;

      span.style.cssText = "animation-delay: " + delay + "s;";
    });
  });
}
