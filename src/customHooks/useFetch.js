import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function useFetch(url, params = null) {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    axios
      .get(url, params)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { videos, loading, error, fetchData };
}
export default useFetch;
