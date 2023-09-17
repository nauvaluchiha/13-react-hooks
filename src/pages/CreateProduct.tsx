import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import ProductForm from "@/components/ProductForm";
import TableProduct from "@/components/ProductTable";
import Footer from "@/components/Footer";
import GenerateNumber from "@/components/GenerateNumber";
import Article from "@/components/Article";

interface ProductData {
  id: string;
  name: string;
  category: string;
  image?: File | HTMLImageElement | string;
  freshness: string;
  desc: string;
  price: number | string;
}

export const CreateProduct = () => {
  const data = useFetch("/v1/98c2bfc1-0f1e-4ab7-946d-b9ebd4bd416f");
  const [productData, setProductData] = useState<ProductData[]>([]);

  useEffect(() => {
    alert("Welcome to Create Product Page");
  }, []);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      data.then((data) => setProductData(data));
      console.log(
        "Munculnya error [Grid.js] [ERROR]: Duplicate plugin ID disebabkan oleh rendering yg terjadi dari useEffect ketika melakukan fetch data. Ini merupakan bug pada library tersebut yg meduplikasi plugin meski sudah dipakai. Bug ini masih belum difix sejak 8 bulan yg lalu."
      );
    }
    return () => {
      ignore = true;
    };
  }, []);
  
  const handleOnSubmit = (data: ProductData) => {
    const {name, category, image, freshness, desc, price} = data;
    const newData: ProductData = {
      id: String(productData.length + 1),
      name: name,
      category: category,
      image: image,
      freshness: freshness,
      desc: desc,
      price: Number(price),
    };
    setProductData(productData.concat(newData));
  };  

  const handleDelete = (id: string) => {
    const newData = productData.filter((item) => `button-${item.id}` !== id);
    setProductData(newData);
  };

  return (
    <main>
      <Article />
      <ProductForm handleOnSubmit={handleOnSubmit} />
      <GenerateNumber />
      <TableProduct productData={productData} handleDelete={handleDelete} />
      <Footer />
    </main>
  );
};
