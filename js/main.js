var instance = new vidbg(".video", {
  mp4: "video/world.mp4", // URL or relative path to MP4 video видео в формате mp4 из папки "video/world.mp4"
  webm: "video/world.webm", // URL or relative path to webm video видео в формате webm подключаем
  poster: "video/poster.jpg", // URL or relative path to fallback image если не грузится будет постер
  overlay: false, // Boolean to display the overlay or not накладка для нашего видео чтобы был фон
  //не нужны для нашего случая overlayColor: '#000', // The overlay color as a HEX
  //не нужны для нашего случая overlayAlpha: 0.3 // The overlay alpha. Think of this as the last integer in RGBA()
});

  // This is the default setting настройки параллакса ракеты
  var rellax = new Rellax('.rocket');
  if (document.body.clientWidth < 576) {
    rellax.destroy();
  }
AOS.init();