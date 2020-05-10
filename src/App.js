import React from "react";

const App = () => {
  return (
    <div className="App">
      <form action="" method="POST">
        <h1>Register</h1>
        <br />
        <input
          type="text"
          className="username"
          placeholder="Username"
          required
        />
        <br />
        <input
          type="password"
          className="password"
          placeholder="Password"
          required
        />
        <br />
        <input
          type="text"
          className="email"
          placeholder="Email Address"
          required
        />
        <br />
        <button className="btn">Register</button>
        <br />
        <a href="#">Already have an account?</a>
      </form>
    </div>
  );
};

export default App;
