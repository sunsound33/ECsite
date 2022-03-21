import Header from "../layouts/Header";
import Head from "next/head";
import useSWR from 'swr';
import Search from "../components/search";

import ShopCard from "../components/ShopCard";

export type json = {
  product_id: number
  product_name : string
  product_description: string
  price: number
  img: string
  type: string
}


const Shop = () => {
  const fetcher = (url:any) => fetch(url).then((res) => res.json());


  const { data, error } = useSWR(
    'http://localhost/api/laravel/Store',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div className="text-center">読み込んでいます。。。</div>;

  return (
    <div>
      <Header/>
      <Search/>
      <ul  className="grid grid-cols-1 lg:grid-cols-3" >
        {data.data.map((json:json) => {
          return (
            <>
              <ShopCard {...json}/>
            </>
          );
        })}
      </ul>
    </div>
  );
}
export default Shop;
