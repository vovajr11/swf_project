import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Stack, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import AuthNav from '../../components/AuthNav';
import { LogBox } from '../../components/Global/Styled';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
    show: false,
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

    const { email, password } = this.state;

    this.props.onLogin({ email, password });
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password, show } = this.state;

    return (
      <LogBox>
        <AuthNav />
        <form onSubmit={this.handleSubmit}>
          <Stack spacing={4}>
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
              Вхід
            </Button>
          </Stack>
        </form>
      </LogBox>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginView);
