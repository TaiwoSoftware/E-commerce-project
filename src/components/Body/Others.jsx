// eslint-disable-next-line react/prop-types
function Others({src, alt}) {
  return (
    <>
      <div className="otherStyle">
        <img
          src={src}
          alt={alt}
          className="testing"
        />
      </div>
    </>
  );
}
export default Others;
