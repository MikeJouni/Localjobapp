import React from 'react';



const App = () => {
  return (
    <div>
      <h1>Welcome to the App Sheikh</h1>
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default App;
