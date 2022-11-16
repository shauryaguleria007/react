import { useState, useEffect } from "react";
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  const bcg = rgb.join(",");
  return (
    <article
      className={`color`}
      style={{
        backgroundColor: `rgb(${bcg})`,
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexColor);
      }}
    >
      <p className="percentage-value">{weight}%</p>
      <p>{hexColor}</p>
      {alert ? <p className="alert"> copied to clipboard</p> : null}
    </article>
  );
};
export default SingleColor;
