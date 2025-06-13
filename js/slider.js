var imageCount = 0;
var total;
var textByline;

function declare(y,array_txt) {
   total = y;
   textByline = array_txt;
};

function slide(x) {
   var image = document.getElementById('img_c');
   imageCount = imageCount + x;
   if (imageCount > total) {imageCount = 0;}
   if (imageCount < 0) {imageCount = total;}
   image.src = "images/fig"+ imageCount +".jpg";
   image.title = textByline[imageCount];
};
