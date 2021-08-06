import MindFusion from "diagram-library";

var diagram = null;

var dgrm = document.getElementById("root");

/* events fired on the draggable target */
dgrm.addEventListener(
  "mousedown",
  function (e) {
    if (e.ctrlKey) diagram.setBehavior(MindFusion.Diagramming.Behavior.Pan);
  },
  false
);

dgrm.addEventListener(
  "mouseup",
  function (e) {
    if (e.ctrlKey)
      diagram.setBehavior(MindFusion.Diagramming.Behavior.LinkShapes);
  },
  false
);

document.body.addEventListener("wheel", function (e) {
  var zoom = diagram.getZoomFactor();
  zoom -= e.deltaY / 10;
  if (zoom > 10) diagram.setZoomFactor(zoom);

  e.preventDefault(); // do not scroll
});
