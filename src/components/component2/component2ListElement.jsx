const Component2ListElement = ({ name, profession, level, salary }) => {
  return (
    <li>
      <span>{name}</span> - 
      <span>{profession}</span> - 
      <span>{level}</span> - 
      <span>{salary}</span>
    </li>
  );
};

export default Component2ListElement;
