function preloadImages(images: string[]) {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
  }
}

export default preloadImages;
