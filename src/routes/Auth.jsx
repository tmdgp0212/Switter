import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Auth() {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [newAccount, setNewAccount] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };
  const auth = getAuth();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (newAccount) {
        //create
        const data = await createUserWithEmailAndPassword(
          auth,
          account.email,
          account.password
        );
        console.log(data);
      } else {
        //login
        const data = await signInWithEmailAndPassword(
          auth,
          account.email,
          account.password
        );
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form>
        <input
          onChange={onChange}
          name="email"
          type="email"
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
        <input
          onClick={onSubmit}
          type="submit"
          value={newAccount ? "Create Account" : "LogIn"}
        />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
}

export default Auth;
