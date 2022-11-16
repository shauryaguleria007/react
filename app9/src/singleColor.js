const SingleColor = ({ rgb, weight, index,hexColor }) => {
  const bcg = rgb.join(",");
  return (
    <article
      className={`color`}
      style={{
        backgroundColor: `rgb(${bcg})`,
      }}
    >
      <p className="percentage-value">{weight}%</p>
      <p>{hexColor}</p>
    </article>
  );
};
export default SingleColor;
