import { useEffect } from "react";
import { useCallback, useState } from "react";

export const useRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async (url, options) => {
    try {
      setLoading(true);
      const res = await fetch(url, options);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.status_message);
      }

      setHasMore(json?.page < json?.total_pages);
      setData(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      setData(null);
      setError(null);
      setLoading(false);
      setHasMore(true);
    };
  }, []);

  return { data, error, hasMore, loading, fetchData };
};
