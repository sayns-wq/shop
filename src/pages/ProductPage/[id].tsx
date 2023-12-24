import { setLastVisitedProducts } from "./../../../utils";
import Image from "next/image";
import mock from "./../../../mock.json";
import { product } from "@/interfaces/common";
import styles from "./ProductPage.module.scss";
import { useEffect, useState } from "react";
import Button from "@/ui/Button/Button";
import Rating from "@/ui/Rating/Rating";
import classNames from "classnames";
import ProductInfo from "@/modules/ProductInfo/ProductInfo";
import ProductCharacteristics from "@/modules/ProductCharacteristics/ProductCharacteristics";

interface ProductPageProps {
  product: product;
}
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  return {
    props: { product: mock.filter((item) => item.id == id)[0] },
  };
};
export default function ProductPage({ product }: ProductPageProps) {
  const [activeColor, setActiveColor] = useState(product.color);

  useEffect(() => {
    setLastVisitedProducts(product.id);
  }, []);

  return (
    <>
      <div className={styles.productPageWrapper}>
        <Image
          className={styles.mainImg}
          src={
            product.colors.find((item) => item.colorName === activeColor)
              ?.previewUrl as string
          }
          alt="изображение"
          width={420}
          height={580}
        ></Image>
        <ProductInfo
          product={product}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        <ProductCharacteristics characteristics={product.characteristics} />
      </div>
    </>
  );
}
