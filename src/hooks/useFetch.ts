import { useEffect, useState } from "react";

function useFetch(api: string) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      try {
        const res = await fetch(api);
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  return { data, error, loading };
}

export default useFetch;
