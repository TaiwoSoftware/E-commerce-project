import SubDetail from "./SubDetail";
import Price from "./Price";
import Percentage from "./Percentage";
import Counter from "./Counter";
function Details() {
  return (
    <>
      <div className="details">
        <p className="first-p">SNEAKER COMPANY</p>
        <h1>
          Fall Limited Edition <span>Sneakers</span>
        </h1>
        <SubDetail />
        <Price />
        <Percentage />
        <Counter />
      </div>
    </>
  );
}
export default Details;
