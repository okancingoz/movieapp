import axios from 'axios';
import {useEffect, useState} from 'react';

const useApiData = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: responseData} = await axios.get(url);
        setData(responseData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useApiData;
