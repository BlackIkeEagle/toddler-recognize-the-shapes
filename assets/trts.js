Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

var pictures = new Array(
	"assets/boot.png",
	"assets/coffeecup.png",
	"assets/apple.png",
	"assets/truck.png",
	"assets/clock.png",
	"assets/fish.png",
	"assets/duck.png",
	"assets/house.png"
);

function shufflePictures()
{
	rndPictures = pictures.shuffle();

	for (i = 0; i < rndPictures.length; i++) {
		imgSrc = rndPictures[i];
		imgAlt = imgSrc.replace(/^.*\//, '');
		imgTag = document.getElementById('pic' + (i+1));
		imgTag.src = imgSrc;
		imgTag.alt = imgAlt;
	}
}
