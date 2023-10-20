import { connect } from "react-redux";
import { Component } from "react";
import { compose } from "@reduxjs/toolkit";
import { login } from "../../store/features/auth";
import { Form, Field } from "react-final-form";
import "./LoginForm.scss";
import { clearLoginErrors } from "../../store/features/forms";
import { Navigate } from "react-router-dom";

class LoginFormContainer extends Component {
  componentDidMount() {
    this.props.clearLoginFormErrors();
  }
  submitForm(values) {
    this.props.loginUser(values);
  }
  render() {
    let loginErrorsFromServer = this.props.loginErrors.map((el) => {
      return (
        <div className="login-form__errors" key={el}>
          {el}
        </div>
      );
    });
    return (
      <Form
        onSubmit={(values) => this.submitForm(values)}
        validate={(values) => {
          const errors = {};
          if (!values.password) {
            errors.password = "Password is required!";
          }
          if (!values.email) {
            errors.email = "Email is required!";
          }
          return errors;
        }}
      >
        {({ handleSubmit, pristine, form, submitting }) => (
          <form onSubmit={handleSubmit} className="login-form">
            <Field name="email">
              {({ input, meta }) => (
                <div
                  className={
                    meta.error && meta.touched
                      ? "login-form__field __error"
                      : "login-form__field"
                  }
                >
                  <label htmlFor="email">Email</label>
                  <input
                    {...input}
                    type="email"
                    placeholder="example@gmail.com"
                  />
                  {meta.error && meta.touched && (
                    <span className="login-form__field__errorText">
                      {meta.error}
                    </span>
                  )}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div
                  className={
                    meta.error && meta.touched
                      ? "login-form__field __error"
                      : "login-form__field"
                  }
                >
                  <label htmlFor="password">Password</label>
                  <input {...input} type="password" placeholder="********" />
                  {meta.error && meta.touched && (
                    <span className="login-form__field__errorText">
                      {meta.error}
                    </span>
                  )}
                </div>
              )}
            </Field>

            {loginErrorsFromServer}

            <div className="login-form__field login-form__remember-me">
              <label htmlFor="rememberMe">Remember me</label>
              <Field component={"input"} name="rememberMe" type="checkbox" />
            </div>
            <button type="submit">Login</button>
            {this.props.isUserAuth ? <Navigate to="/" /> : null}
          </form>
        )}
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isloginPopupOpen: state.popups.isLoginPopupOpen,
    loginErrors: state.forms.loginForm.errors,
    isUserAuth: state.auth.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (values) => dispatch(login(values)),
    clearLoginFormErrors: () => dispatch(clearLoginErrors()),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  LoginFormContainer
);
