import { useEffect, useState } from "react";

const useGetData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((items) => setData(items));
  }, []);
  return data;
};

export default useGetData;
