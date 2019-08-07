import React from "react";
import { Field, reduxForm } from "redux-form";

class TaskForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }

  renderTextInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderNumberInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type="number" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="description"
          component={this.renderTextInput}
          label="Description"
        />
        <Field
          name="duration"
          component={this.renderNumberInput}
          label="Duration"
        />
        <Field className="field" name="category" component="select" label="Category">
          <option value="" disabled defaultValue>Task Category</option>
          <option value="Running">Running</option>
          <option value="Lifting">Lifting</option>
          <option value="Coding">Coding</option>
          <option value="Reading">Reading</option>
          <option value="Relaxing">Relaxing</option>
        </Field>
        <button className="positive ui button">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.description) {
    errors.description = "You must enter a description.";
  }

  if (!formValues.duration) {
    errors.duration = "You must include the duration of the task.";
  }

  return errors;
};

export default reduxForm({
  form: "taskForm",
  validate
})(TaskForm);