let app = new PIXI.Application({
  width: 1000,
  height: 750,
});
document.body.appendChild(app.view);

let img = new PIXI.Sprite.from('IMG_20190323_171910_1000x750.jpg');
img.width = 1000;
img.height = 750;
app.stage.addChild(img);

depthMap = new PIXI.Sprite.from('IMG_20190323_171910_1000x750-map-2.jpg');
app.stage.addChild(depthMap);

displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

window.onmousemove = function (e) {
  displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 45;
  displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 45;
};

// https://redstapler.co/3d-photo-from-image-javascript-tutorial/
