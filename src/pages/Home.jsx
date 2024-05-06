import Posts from "./Posts";
import CreatePost from "./CreatePost";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
        <Posts/>
        <CreatePost/>
    </div>
  );
}
export default Home;