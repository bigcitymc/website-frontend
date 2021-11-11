const OAuth = {
  clientId: 'cf7c04d0-b6dd-4d2e-ad5d-501d389c7b43',
  clientSecret: 'HBnsHFHdVbkEajGFGBchu94KHk8yMXvUMNP2tc4y3gcKgKdVVJf92zjWGFwsqe8F',

  getAccessTokenData(username, password) {
    return `grant_type=password&client_id=${this.clientId}&client_secret=${this.clientSecret}&scope&username=${username}&password=${password}`;
  },

  getRefreshTokenData() {
    return `grant_type=refresh_token&client_id=${this.clientId}&client_secret=${this.clientSecret}&scope`;
  }
}

export default OAuth;
