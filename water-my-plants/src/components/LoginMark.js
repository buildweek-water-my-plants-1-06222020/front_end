import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'


class LoginMark extends React.Component {
  state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/auth/login", this.state.credentials)
        .then(res =>{
          window.localStorage.setItem('token', res.data.payload)
          this.props.history.push('/plantlist')
        })
        .catch(err => console.log(err))
      };
  
   render() {
    return (
      <div className='login'>
        <h2>Login</h2>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder='Username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginMark;