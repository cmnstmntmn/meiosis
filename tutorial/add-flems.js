/*global process*/
var fs = require("fs");
var fromDir = process.argv[2];
var toDir = process.argv[3];

var linkMap = {
  flyd: "https://unpkg.com/flyd@0.2.8/flyd.js",
  lodash: "https://unpkg.com/lodash@4.17.10",
  mergerino: "https://unpkg.com/mergerino@0.4.0",
  mithril: "https://unpkg.com/mithril@2.0.0-rc.3",
  "mithril-stream":
    "https://unpkg.com/mithril@2.0.0-rc.3/stream/stream.js",
  preact: "https://unpkg.com/preact@10.3.4/dist/preact.umd.js",
  preactHooks:
    "https://unpkg.com/preact@10.3.4/hooks/dist/hooks.umd.js",
  react:
    "https://unpkg.com/react@16.13.1/umd/react.development.js",
  "react-dom":
    "https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"
};

var filenames = fs.readdirSync(fromDir);

filenames.forEach(source => {
  var input = fs.readFileSync(fromDir + "/" + source, "ascii");
  var lines = input.split("\n");
  var flemNumber = 1;

  lines = lines.map(function(line) {
    if (line.startsWith("@flems")) {
      var parts = line.split(" ");

      var files = parts[1].split(",");
      var fileContents = files.map(filename => {
        var file = JSON.stringify(
          fs.readFileSync(filename, "ascii")
        );
        var shortname = filename.substring(
          filename.lastIndexOf("/") + 1
        );
        var compiler = "";
        if (shortname.endsWith("jsx")) {
          compiler = ', compiler: "babel"';
          shortname = shortname.substring(
            0,
            shortname.length - 1
          );
        }
        return `{name: "${shortname}", content: ${file}${compiler}}`;
      });
      var fileString = "[" + fileContents.join(",") + "]";

      var links = parts.length > 2 ? parts[2].split(",") : [];
      if (links.length === 1 && links[0] === "[]") {
        links = [];
      }
      var linkContents = links.map(link => {
        var url = linkMap[link];
        return `{name: "${link}", type: "js", url: "${url}"}`;
      });
      var linkString = "[" + linkContents.join(",") + "]";

      var style = ' style="';
      if (parts.length > 3) {
        style += " height:" + parts[3] + "px;";
      }

      var hidden = parts.length > 4 && parts[4] === "hidden";
      if (hidden) {
        style += " display: none;";
      }
      style += '"';

      var middle = "75";
      if (parts.length > 5) {
        middle = parts[5];
      }

      line =
        (hidden
          ? `<div style="margin-bottom: 24px;"><a href="javascript:"
             onclick="this.style.display='none';document.getElementById('flems${flemNumber}').style.display='block'"
             >Show solution</a></div>`
          : "") +
        `<div id="flems${flemNumber}" class="flemscode"${style}></div>
  <script>
    window.Flems(flems${flemNumber}, {
      files: ${fileString},
      links: ${linkString},
      middle: ${middle}
    })
  </script>
      `;

      flemNumber++;
    }
    return line;
  });

  var dest = toDir + "/" + source;
  fs.writeFileSync(dest, lines.join("\n"));
});
