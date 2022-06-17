import { useEffect, useState } from "react";

const useStoreAPI = () => {
  const [Items, setItems] = useState<Array<Object>>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  var componentMounted: Boolean = false;

  interface storeProps {
    Items:Array<Object>;
    loading:Boolean;
  }

  useEffect(() => {
    setLoading(true);
    componentMounted=true;
    const getData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setItems(data);
      setLoading(false);
      componentMounted=false;
    };
    if (componentMounted) {
      getData();
    }
  }, []);

  return [Items, loading];
};

export default useStoreAPI;
