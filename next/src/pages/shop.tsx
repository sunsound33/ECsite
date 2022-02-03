import Header from "../layouts/Header";
import type { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import useSWR from 'swr';
import Search from "../components/search";
import { useState } from 'react'
import Modal from "../components/Modal";

type json = {
  product_id: number
  product_name : string
  product_description: string
  price: number
  img: string
  type: string
}

const fetcher = (url:any) => fetch(url).then((res) => res.json());

const Shop = () => {




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
            <div key={json.product_id}>
              <section  className="flex-row bg-white py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12" >
                  <div className="w-full p-6 flex flex-col">
                    <img className="hover:grow hover:shadow-lg bg-contain bg-senter" src={`http://localhost/image/Store/Audio/${json.img}` } />
                    <div className="pt- flex items-center justify-between">
                      <p className="">{json.product_name}</p>
                      <svg className="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default Shop;
