const BannerImage = ({baseImagePath}) => {
    
function altGenerator(path) {
    return path.split('/').pop().split('.').slice(0, -1).join('.');
}
    
const imageAlt = altGenerator(baseImagePath);

    return (
      <div className="banner-image">
        <img src={`${baseImagePath}-1200w.webp`} loading="lazy"
        alt={imageAlt}
        srcSet={`${baseImagePath}-480w.webp 480w, ${baseImagePath}-768w.webp 768w, ${baseImagePath}-1200w.webp 1200w`}
        />  
      </div>
    );
  }
  export default BannerImage;