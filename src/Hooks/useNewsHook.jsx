import { useEffect, useState } from "react";
import axios from "axios";

const useNewsHook = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setNews([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://rahmaww.org/api/news",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setNews((prevNews) => {
          return [...prevNews, ...res.data["news"].map((b) => b)];
        });
        setHasMore(
          res.data["news"].length > 0 && res.data["pages"] > pageNumber
        );
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, news, hasMore };
};

export default useNewsHook;
