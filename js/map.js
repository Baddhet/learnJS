const buttomZoom = document.querySelectorAll('.map__zoom');
const mapImage = document.querySelector('.map__image');
let startCoordinates;
const positionCursor = (event) => {
  return {
    posX: event.pageX,
    posY: event.pageY
  }
}

const mapMove = (event) => {
  let posXY = positionCursor(event);
  mapImage.style.top = posXY.posY - startCoordinates.posY + 'px';
  mapImage.style.left = posXY.posX - startCoordinates.posX + 'px';
}

const stopDrag = () => {
  mapImage.removeEventListener('mousemove', mapMove);
  document.removeEventListener('mouseup', mapMove);
}

mapImage.addEventListener('mousedown', (event) => {
  startCoordinates = positionCursor(event);
  console.log(startCoordinates)
  mapImage.addEventListener('mousemove', mapMove);
  mapImage.addEventListener('mouseup', stopDrag);
});


/*mapImage.addEventListener('mouseup', (event) => {
  let stopXY = positionCursor(event);
  mapImage.style.top = stopXY.posY - startCoordinates.posY + 'px';
  mapImage.style.left = stopXY.posX - startCoordinates.posY + 'px';
  console.log('stop', stopXY);
});*/

mapImage.ondragstart = function () {
  return false;
};