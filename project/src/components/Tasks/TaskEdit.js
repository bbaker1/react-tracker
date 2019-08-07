import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchTask, editTask } from "../../actions";
import TaskForm from "./TaskForm";

class TaskEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editTask(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <h2>Edit a Task</h2>
        <TaskForm
          initialValues={_.pick(this.props.task, 'description', 'duration', 'category')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
      task: state.tasks[ownProps.match.params.id]
    };
};

export default connect(
  mapStateToProps,
  { fetchTask, editTask }
)(TaskEdit);
