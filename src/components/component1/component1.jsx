import Component2 from "../component2/component2";
import styles from "./component1.module.css";

const Component1 = () => {
  return (
    <div className={styles.container}>
      <h2> Component1 Content</h2>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </p>
      <Component2/>
    </div>
  );
};

export default Component1;
