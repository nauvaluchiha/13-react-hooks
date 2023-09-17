import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import "@/assets/css/Table.module.css";
import { useEffect, useState } from "react";

type Product = {
  productData: ProductData[];
  handleDelete: (id: string) => void;
};

interface ProductData {
  id: string;
  name: string;
  category: string;
  image?: File | HTMLImageElement | string;
  freshness: string;
  desc: string;
  price: number | string;
}

const productTitle = [
  "No",
  "Product Name",
  "Product Category",
  "Image of Product",
  "Product Freshness",
  "Additional Desciption",
  "Product Price",
  "Action",
];

const ProductTable: React.FC<Product> = ({ productData, handleDelete }) => {
  const [data, setData] = useState<unknown>([]);

  useEffect(() => {
    const eachData = productData.map((item) => {
      const button = document.createElement("button");
      button.className = "btn btn-danger";
      button.innerHTML = "Delete";
      button.id = `button-${item.id}`;
      button.type = "button";

      return [
        item.id,
        item.name,
        item.category,
        item.image,
        item.freshness,
        item.desc,
        `$ ${item.price}`,
        button,
      ];
    });
    setData(eachData);
  }, [productData]);

  useEffect(() => {
    setTimeout(() => {
      const button = document.querySelectorAll("button");
      button.forEach((btn) => {
        btn.addEventListener("click", (e: MouseEvent) => {
          const targetId: string | null = e.target ? (e.target as HTMLElement).id : null;
          handleDelete(targetId!);
        });
      });
    }, 300);
  }, [data]);

  return (
    <section style={{ marginBottom: "150px" }}>
      <div className="px-0 px-md-5" style={{ marginTop: "220px" }}>
       <h6 className="text-center px-4 mt-2">
        API: https://mocki.io/v1/98c2bfc1-0f1e-4ab7-946d-b9ebd4bd416f
      </h6>
        <Grid
          data={data}
          columns={productTitle}
          search={true}
          pagination={{
            enabled: true,
            limit: 20,
          }}
        />
      </div>
    </section>
  );
};

export default ProductTable;
