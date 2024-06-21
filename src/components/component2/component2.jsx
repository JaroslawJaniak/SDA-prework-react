import Component2ListElement from "./component2ListElement";
import styles from "./component2.module.css";

const Component2 = () => {
  const staff = [
    { name: "John", salary: 1000, level: "junior", profession: "developer" },
    { name: "Andy", salary: 1800, level: "junior", profession: "designer" },
    { name: "Jane", salary: 2000, level: "junior", profession: "designer" },
  ];

  const renderStuff = () => {
    const result = staff.map((el) => (
      <Component2ListElement
        name={el.name}
        profession={el.profession}
        level={el.level}
        salary={el.salary}
      />
    ));

    return result;
  };

  return (
    <div className={styles.container}>
      <h2>Lista uzytkownikow:</h2>
      <ul>{renderStuff()}</ul>
    </div>
  );
};

export default Component2;
