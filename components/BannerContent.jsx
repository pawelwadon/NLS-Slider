import Button from "./Button";

const BannerContent = ({bannerSide,bannerText,bannerLogo}) => {

let side = bannerSide === "left" ? "left-side-banner" : "right-side-banner";

  return (
    <div className={`banner-content ${side}`}>
        <img src={bannerLogo} loading="lazy" alt="" srcset="" />
        <p>{bannerText}</p>
        <Button buttonText="Zobacz produkty"/>
    </div>
  );
}
export default BannerContent;