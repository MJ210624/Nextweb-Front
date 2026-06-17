const getPosts = async () => {
  const response = await fetch(
    "https://back-nextweb.onrender.com/posts/feed",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar posts");
  }

  return await response.json();
};

export default getPosts