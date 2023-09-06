import cartImage from '../images/icon-cart - Copy.svg'
function CartButton() {
    return (
        <>
            <button className='cartImage'>
                <img src={cartImage} alt="cart" className='fill' />
                Add to Cart
            </button>
        </>
    )
}
export default CartButton;