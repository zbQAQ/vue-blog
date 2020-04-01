document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    const cssText = `

      .rippleWrapper,
      .rippleCircle {
        position: absolute;
        left: 0;
        top: 0;
        user-select: none;
      }

      .rippleWrapper {
        height: 100%;
        width: 100%;
        contain: strict;
        overflow: hidden;
      }

      .rippleCircle {
        border-radius: 50%;
        pointer-events: none;
        background-color: rgba(238, 238, 238, 0.8);
        transition: opacity 2s ease, transform 0.45s ease;

        opacity: 0;
        transform: scale(0, 0);

        -webkit-animation: ripple 0.4s linear;
        animation: ripple 0.4s linear;
      }

      @keyframes ripple {
        from {
          opacity: 0.6;
          transform: scale(0, 0);
        }
        to {
          opacity: 0;
          transform: scale(3, 3);
        }
      }
    `;
    var style = document.createElement("style");
    style.type = "text/css";
    try {
      style.appendChild(document.createTextNode(cssText));
    } catch (ex) {
      style.styleSheet.cssText = cssText;
    }
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);

    const btns = document.getElementsByClassName("rippleBtn");
    const btnsLength = btns.length;
    for (let i = 0; i < btnsLength; i++) {
      btns[i].innerHTML += `<div class="rippleWrapper"></div>`;
      btns[i].addEventListener("mousedown", function(e) {
        let target = e.target;
        let circlePosition = {
          x: e.pageX - this.offsetLeft - this.clientWidth / 2,
          y: e.pageY - this.offsetTop - this.offsetWidth / 2
        };
        let oDiv = document.createElement("div");
        oDiv.className = "rippleCircle";
        oDiv.style.width = this.offsetWidth + "px";
        oDiv.style.height = this.offsetWidth + "px";
        oDiv.style.top = circlePosition.y + "px";
        oDiv.style.left = circlePosition.x + "px";

        target.appendChild(oDiv);

        setTimeout(() => {
          oDiv.remove();
        }, 1000);
      });
    }

    // console.log("rippleBtn.js", btns);
  }
};
