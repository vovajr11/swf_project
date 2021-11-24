import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { authOperations } from '../../redux/auth/index';
import { Stack, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import AuthNav from '../../components/AuthNav';
import { LogBox } from '../../components/Global/Styled';

class ReqisterView extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    show: false,
    redirect: false,
  };

  showPassword = () =>
    this.setState(prevState => ({
      show: !prevState.show,
    }));

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;

    this.props.onRegister({ username, email, password });
    this.setState({ name: '', email: '', password: '', redirect: true });
  };
  render() {
    const { username, email, password, show, redirect } = this.state;

    return (
      <LogBox>
        <AuthNav />
        <form onSubmit={this.handleSubmit}>
          <Stack spacing={4}>
            <Input
              placeholder="ПІБ"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />

            <Input
              placeholder="Пошта"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Пароль"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={this.showPassword}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button colorScheme="blue" type="submit">
              Реєстрація
            </Button>
            {redirect && <Redirect to="/verification" />}
          </Stack>
        </form>
      </LogBox>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  ReqisterView,
);
