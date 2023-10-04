import classes from "./Input.module.css";

const Input = (props) => {
  const student1 = {
    name: "Yash",
    age: "25",
  };
  function changeAge(studentObj) {
    studentObj.age = "30";
  }
  changeAge(student1);
  console.log(student1.age);
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} />
    </div>
  );
};

export default Input;
