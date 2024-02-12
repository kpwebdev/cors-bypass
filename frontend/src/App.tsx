import axios, { type AxiosResponse } from "axios";
import { useEffect } from "react";

interface friendsResponse {
  friends: string[];
}

function App() {
  useEffect(() => {
    const getFriends = async () => {
      const response: AxiosResponse = await axios.get(
        "http://localhost:3000/friends"
      );
      const data: friendsResponse = response.data;
      console.log(data);
    };

    getFriends();
  }, []);
  return (
    <>
      <header>
        <h1>The Best React App</h1>
      </header>
      <main>
        <h2>Friends</h2>
      </main>
    </>
  );
}

export default App;
