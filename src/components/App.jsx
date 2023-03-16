import { useState } from "react";
import AppRouter from "@/components/Router";
import { authService } from "@/firebaseInstance";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
