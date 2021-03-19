function PhotoBanner() {
  return (
    <div class="picture-slide-container">
      <div class="photo-slides w3-animate-fading" id="photo-one">
        <div class="caption-text">Photo by Joe Henley</div>
      </div>
      <div class="photo-slides w3-animate-fading" id="photo-two">
        <div class="caption-text">Photo by Joe Henley</div>
      </div>
      <div class="photo-slides w3-animate-fading" id="photo-three">
        <div class="caption-text">Photo by Joe Henley</div>
      </div>
      <div class="photo-slides w3-animate-fading" id="photo-four">
        <div class="caption-text">Photo by Joe Henley</div>
      </div>

      <a class="prev" onclick="imageSlides(-1)">
        &#8249;
      </a>
      <a class="next" onclick="imageSlides(1)">
        &#8250;
      </a>
    </div>
  );
}

export default PhotoBanner;
