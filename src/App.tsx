import React, { useEffect } from "react";
import "./App.css";
import { capture, OutputType } from "html-screen-capture-js";

function App() {
  const onCaptureClick = () => {
    const docText = capture(OutputType.STRING, document, {
      attrKeyValuePairsOfIgnoredElements: {
        id: "content-to-ignore",
      },
    });

    const blob = new Blob([docText as string], {
      type: "text/html",
    });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "capture.html";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const canvas = document.getElementById("my-canvas") as HTMLCanvasElement;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const grd = ctx.createRadialGradient(50, 25, 0, 50, 25, 50);
        grd.addColorStop(0, "#000");
        grd.addColorStop(1, "#0aa");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 100, 50);

        ctx.font = "16px Helvetica";
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.fillText("Canvas", canvas.width / 2, canvas.height / 2 + 5);
      }
    }
  }, []);

  return (
    <div className="App">
      <div id="content-to-capture" className="content-to-capture">
        <div className="content-left">
          <img
            className="gal-gadot-img"
            height="317"
            width="214"
            title="Gal Gadot"
            alt="Gal Gadot"
            crossOrigin="anonymous"
            src="https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg"
          />
        </div>
        <div className="content-right">
          <section className="gal-gadot-bio">
            <a href="https://en.wikipedia.org/wiki/Gal_Gadot">
              Gal Gadot Varsano
            </a>{" "}
            (born 30 April 1985) is an Israeli actress and model. At age 18, she
            was crowned Miss Israel 2004. She then served two years in the
            Israel Defense Forces as a combat instructor, and began studying law
            and international relations at IDC Herzliya college while building
            up her modeling and acting careers.
          </section>
          <section className="form-row">
            <label>Name:</label>
            <input id="name-input" type="text" title="name" value="Gal Gadot" />
          </section>
          <section className="form-row">
            <label>Description:</label>
            <textarea id="desc-input">
              Gal Gadot is a perfect human being.
            </textarea>
          </section>
          <section className="form-row">
            <label>Awesomeness:</label>
            <input id="check-input" type="checkbox" />
          </section>
          <section>
            <div className="pseodo-elements">Pseudo Elements</div>
          </section>
          <section>
            <canvas
              id="my-canvas"
              className="my-canvas"
              width="100"
              height="50"
            ></canvas>
            <div id="content-to-ignore" className={"capture"}>
              <button onClick={() => onCaptureClick()} className="btn">
                Capture
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
