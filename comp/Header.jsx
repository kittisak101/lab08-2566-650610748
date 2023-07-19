export const Header = () => {
  return (
    <div>
      <h4 className="display-4 fst-italic text-center">Todo List Mock Up</h4>
      <p className="text-secondary text-center">
        This lab teach you how to split react component(s)
      </p>
    </div>
  );
};

export const TaskInput = () => {
  return (
    <div className="d-flex gap-1">
      <input
        className="form-control"
        placeholder="Insert a task here.."
      ></input>
      <button className="btn btn-primary">Add</button>
    </div>
  );
};

export const Task = (props) => {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span>{props.title}</span>
      <button className="btn btn-success">Done</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export const Footer = (props) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {props.year} {props.fullName} {props.studentId}
      </p>
    </div>
  );
};
