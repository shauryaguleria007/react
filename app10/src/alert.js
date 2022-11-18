import { useEffect } from "react";
const Alert = ({ msg, type, showAlert, alert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert(false, " ", " ");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert, showAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
