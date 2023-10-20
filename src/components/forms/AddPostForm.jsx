import { connect } from "react-redux";
import { Component } from "react";
import { compose } from "@reduxjs/toolkit";
import { Form, Field } from "react-final-form";
import "./AddPostForm.scss";
import { addPost } from "../../store/features/posts";
import withAuth from "../hocs/withAuth";

class AddPostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postText: '',
    }
  }
  submitForm(values) {
    this.props.addPost(values.postText);
    this.clearInput();
  }
  afterChange(e) {
    this.setState({postText: e.target.value})
  }
  clearInput() {
    this.setState({postText: ''})
  }
  render() {
    return (
      <Form
        onSubmit={(values) => this.submitForm(values)}
        validate={(values) => {
          const errors = {};
          if ( values.postText && values.postText.length < 10) {
            errors.postText = "Text length min 10 symbols!";
          }
          return errors;
        }}
      >
        {({ handleSubmit, pristine, form, submitting }) => (
          <form onSubmit={handleSubmit} className="add-post-form">
            <Field name="postText">
              {({ input, meta }) => (
                <div
                  className={
                    meta.error && meta.touched
                      ? "add-post-form__field __error"
                      : "add-post-form__field"
                  }
                >
                  <label htmlFor="postText">ADD POST</label>
                  <textarea
                    {...input}
                    onInput={(e) => this.afterChange(e)}
                    type="text"
                    placeholder="Your post text is here!"
                    value={this.state.postText}
                  />
                  {meta.error && meta.touched && (
                    <span className="add-post-form__field__errorText">
                      {meta.error}
                    </span>
                  )}
                </div>
              )}
            </Field>
            <button type="submit">ADD</button>
          </form>
        )}
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => dispatch(addPost(text)),
  };
};

const WithAuthForm = withAuth(AddPostForm)

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(WithAuthForm);
