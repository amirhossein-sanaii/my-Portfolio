window.onload = function() {
  try {
    TagCanvas.Start('myCanvas','tags',{
      textColour: '#08fdd8',
      outlineColour: '#1d1d1d',
      reverse: false,
      depth: 0.8,
      maxSpeed: 0.05
    });
  } catch(e) {
    // something went wrong, hide the canvas container
    document.getElementById('myCanvasContainer').style.display = 'none';
  }
};