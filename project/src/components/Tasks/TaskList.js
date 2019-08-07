import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTasks } from "../../actions";

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderList() {
    const userTasks = this.props.tasks.filter(
      task => task.userId === this.props.currentUserId
    );
    return userTasks.map(task => {
      return (
        <div className="item" key={task.id}>
          <div className="right floated content">
            <h3>{task.category}</h3>
            <Link to={`/tasks/edit/${task.id}`} className="mini green ui button">Edit</Link>
            <Link to="/" className="mini red ui button">Delete</Link>
          </div>
          <i className="check icon" />
          <div className="content">
            <h4 className="header">{task.description}</h4>
            <div className="description">{task.duration} hour(s)</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/tasks/new" className="ui button primary">
            Create Task
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Tasks</h2>
        <div className="ui relaxed divided list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: Object.values(state.tasks),
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchTasks }
)(TaskList);
