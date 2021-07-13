import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import BlogList from "./BlogList";
import Footer from "./Footer";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await firestore
        .collection("posts")
        .orderBy("date", "desc")
        .get();
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    fetch();
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
