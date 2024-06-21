import styles from "./component3.module.css";
import { useState } from "react";

const Component3 = () => {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [submitData, setSubmitData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitData(`${inputFirstName} ${inputLastName}`);

    setInputFirstName("");
    setInputLastName("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="firstName">Imię</label>
          <br></br>
          <input
            id="firstName"
            type="text"
            value={inputFirstName}
            onChange={(event) => setInputFirstName(event.target.value)}
          />
        </div>
        <div>
          <label for="lastName">Nazwisko</label>
          <br></br>
          <input
            id="lastName"
            type="text"
            value={inputLastName}
            onChange={(event) => setInputLastName(event.target.value)}
          />
        </div>
        <button type="submit">Wyślij</button>
      </form>
      <div>{submitData}</div>
    </div>
  );
};

export default Component3;
