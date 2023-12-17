import { setLastVisitedProducts } from "./../../../utils";
import Image from "next/image";
import mock from "./../../../mock.json";
import { product } from "@/interfaces/common";
import styles from "./ProductPage.module.scss";
import { useEffect } from "react";
import Button from "@/ui/Button/Button";

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
  useEffect(() => {
    setLastVisitedProducts(product.id);
  }, []);

  return (
    <>
      <div className={styles.productPageWrapper}>
        <div className={styles.productCharacteristics}>
          <Image
            src={product.imageUrl}
            alt="изображение"
            width={420}
            height={580}
          ></Image>
          <h2>Характеристики</h2>
          <div className={styles.characteristics}>
            {product.characteristics &&
              product.characteristics.map((characteristic) => {
                return (
                  <div className={styles.chareacteristicsWrapper}>
                    <div className={styles.characteristicTitle}>
                      {characteristic.title}
                    </div>
                    {characteristic.characteristicItems.map(
                      (characteristicItem) => {
                        return (
                          <div className={styles.characterWrapper}>
                            <h5 className={styles.characterTitle}>
                              {characteristicItem.characterTitle}
                            </h5>
                            <h5 className={styles.characterItem}>
                              {characteristicItem.character}
                            </h5>
                          </div>
                        );
                      }
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productTitle}>{product.name}</div>
          <div className={styles.productPrice}>{product.price}</div>
          <div className={styles.colorsWrapper}>
            <div className={styles.currentColor}>
              <span>Цвет:</span>
              <span>{product.color}</span>
            </div>
            <div>
              {product.colors.map((colorItem) => {
                return (
                  <Image
                    src={colorItem.previewUrl}
                    alt="изображение"
                    className={styles.colorPreviewImage}
                    width={40}
                    height={60}
                  ></Image>
                );
              })}
            </div>
          </div>
          <h5>Таблица размеров</h5>
          <div className={styles.sizes_wrapper}>
            {!!product.sizes &&
              product.sizes.map((size) => {
                return (
                  <div className={styles.sizeElement} key={size}>
                    {size}
                  </div>
                );
              })}
          </div>
          <Button name="primaryPurpleBtn">Добавить в корзину</Button>
        </div>
      </div>
    </>
  );
}
