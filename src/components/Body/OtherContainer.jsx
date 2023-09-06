import Others from "./Others";
import ProductOne from "../images/image-product-1-thumbnail.jpg";
import productTwo from '../images/image-product-2-thumbnail.jpg';
import productThree from '../images/image-product-3-thumbnail.jpg';
import productFour from '../images/image-product-4-thumbnail.jpg';  
function OtherContainer() {
  return (
    <>
      <div className="otherContainer">
        <Others src={ProductOne} alt='first-image' />
        <Others src={productTwo} alt='second-image' />
        <Others src={productThree} alt='third-image' />
        <Others src={productFour} alt='fourth-image' />
      </div>
    </>
  );
}
export default OtherContainer;
