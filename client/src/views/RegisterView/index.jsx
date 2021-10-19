import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth/index';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    padding: 4,
  },
};

class ReqisterView extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { username, email, password } = this.state;

    return (
      <div>
        <h1>Register page</h1>

        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  ReqisterView,
);
