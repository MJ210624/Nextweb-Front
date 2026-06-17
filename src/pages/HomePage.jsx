import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import getPosts from "../services/HomePageServices";

const [posts,setPosts] = useState([]);
const [loading,setLoadin] = useState(true);
const [error,setErro] = useState(true);

useEffect(() => {
  async function loadPosts() {
    try {
      const data = await getPosts();

      setPosts(data);
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  loadPosts();
}, []);

if (loading) {
  return (
    <div className="min-h-screen bg-gray-800">
      <NavBar />

      <div className="text-white p-8">
        Carregando feed...
      </div>
    </div>
  );
}

if (error) {
  return (
    <div className="min-h-screen bg-gray-800">
      <NavBar />

      <div className="text-red-400 p-8">
        Não foi possível carregar o feed.
      </div>
    </div>
  );
}

{
  posts.map((post) => (
    <div
      key={post.id}
      className="bg-gray-700 rounded-3xl mb-6"
    >
      <div className="p-5 border-b border-gray-600">
        <h3 className="text-white font-semibold">
          {post.community.name}
        </h3>

        <p className="text-gray-400 text-sm">
          por {post.user.username}
        </p>
      </div>

      <div className="p-5">
        <p className="text-white">
          {post.content}
        </p>
      </div>

      <div className="px-5 pb-5 flex gap-6">
        <span className="text-gray-300">
          ❤️ {post.likes}
        </span>

        <span className="text-gray-300">
          💬 {post.comments}
        </span>
      </div>
    </div>
  ));
}