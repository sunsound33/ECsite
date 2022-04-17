import axios from "../libs/axios";
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
  const fetcher = (url:any) => axios.get('/api/laravel/Store').then((res) => res.data);


  const { data, error } = useSWR(
    '/api/laravel/Store',
    fetcher
  );

  if (error) return <div>ページの読み込みに失敗しました。</div>;
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
