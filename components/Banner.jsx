import BannerImage from "./BannerImage";
import BannerContent from "./BannerContent";

const Banner = ({brand, bannerSide, bannerText}) => {

let imagePathByBrand = `../assets/${brand}-banner`
let brandLogo = `../assets/${brand}-logo.webp`

  return (
    <div className="banner">
        <BannerImage baseImagePath={imagePathByBrand}/>
        <BannerContent bannerSide={bannerSide} bannerText={bannerText} bannerLogo={brandLogo}/>
    </div>
  );
}

export default Banner;