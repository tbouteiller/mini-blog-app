import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import BlogList from "./BlogList";
import Footer from "./Footer";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("posts")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        const data = [];
        snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
        setIsLoading(false);
        setBlogs(data);
      });
    return unsubscribe;
  }, []);

  return (
    <div className="home">
      {isLoading && <div className="loader"></div>}
      {blogs && <BlogList blogs={blogs} />}
      <Footer />
    </div>
  );
}

export default Home;
