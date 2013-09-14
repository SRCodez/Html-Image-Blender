function HtmlImageBlender(img) {
   var canvas = document.createElement('canvas');
   canvas.width = img.width;
   canvas.height = img.height;
   var ctx = canvas.getContext('2d');
   if(!ctx) return;
   ctx.drawImage(img, 0, 0);
   var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
   var pixels = imageData.data, r, g, b;
    for (var i = 0, il = pixels.length; i < il; i += 4) {
      // generate "noise" pixel
      r = pixels[i];
      g = pixels[i + 1];
      b = pixels[i + 2];
     // alpha compositing
      if(r >= 150 && g >= 150 && b >= 150){
         pixels[i + 3] = 0;
      }
   }
   ctx.putImageData(imageData, 0, 0);
   img.src = canvas.toDataURL();
}
