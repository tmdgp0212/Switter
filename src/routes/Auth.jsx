import React, { useState } from "react";

function Auth() {
  const [account, setAccount] = useState({ email: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          onChange={onChange}
          name="email"
          type="text"
          placeholder="Email"
          required
          value={account.email}
        />
        <input
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Password"
          required
          value={account.password}
        />
        <input onClick={onSubmit} type="submit" value="login" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
}

export default Auth;
