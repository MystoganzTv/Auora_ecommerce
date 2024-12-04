import { useEffect, useState } from 'react';

const localProductList = [
  {
    id: '1A',
    title: 'Colorful Furniture',
    price: '100',
    path: require('../../assets/images/fn3.jpg'),
  },
  {
    id: '1B',
    title: 'Comfy sofa',
    price: '200',
    path: require('../../assets/images/fn2.jpg'),
  },
  {
    id: '1C',
    title: 'Beautiful Home furniture',
    price: '500',
    path: require('../../assets/images/fn1.jpg'),
  },
];

const fetchHomeProduct = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const timer = new Promise(resolve => {
        setTimeout(() => {
          resolve(
            'product 1',
            'product 2',
            'product 3',
            'product 4',
            'product 5'
          );
        }, 2000);
        return () => clearTimeout(timer);
      });
      const result = await timer;
      setData(localProductList);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  //this will pass the data to the UI
  return { data, isLoading, error };
};
export default fetchHomeProduct;
