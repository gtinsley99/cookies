import { useState, useEffect } from "react";

const Picsapi = (setPics) => {
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchPics = async () => {
      try {
        const res = await fetch(
          "https://picsum.photos/v2/list"
        );
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setPics(data);
      } catch (error) {
        setErrors("Failed to fetch data");
        console.log(error);
        console.log(errors);
      }
    };
    fetchPics();
  }, []);

  return;
};


export default Picsapi;