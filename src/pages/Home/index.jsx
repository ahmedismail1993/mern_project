import React, { useState } from "react";
import { useTranslation } from "react-i18next";
function Home() {
  const [state, seState] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const { t } = useTranslation();
  const objectCopy = { ...state };
  const formKeys = Object.keys(objectCopy);

  const handleChange = e => {
    const { name, value } = e.target;
    seState(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  return (
    <div>
      <h1>{t("welcome", { NickName: "dark Sider" })}</h1>
      <form>
        {formKeys.map((formKey, index) => (
          <div key={index}>
            <input
              value={state[formKey]}
              name={formKey}
              placeholder={formKey}
              onChange={handleChange}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
export default Home;
