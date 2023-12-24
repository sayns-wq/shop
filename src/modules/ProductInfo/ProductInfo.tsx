import Image from "next/image";

import styles from "./ProductInfo.module.scss";
import Button from "@/ui/Button/Button";
import { product } from "@/interfaces/common";

import Rating from "@/ui/Rating/Rating";
import classNames from "classnames";
import { useState } from "react";

interface ProductInfo {
  product: product;
  setActiveColor: (activeColor: string) => void;
  activeColor: string;
}
export default function ProductInfo({
  product,
  activeColor,
  setActiveColor,
}: ProductInfo) {
  const [selectedSize, setSelectedSize] = useState<number | undefined>(
    undefined
  );

  return (
    <div className={styles.productInfo}>
      <div className={styles.productTitle}>{product.name}</div>
      <div className={styles.productPrice}>{product.price}</div>
      <Rating ratingValue={product.rating} edit={false} />

      <div className={styles.colorsWrapper}>
        <div className={styles.currentColor}>
          <span>Цвет:</span>
          <span>{activeColor}</span>
        </div>
        <div>
          {product.colors.map((colorItem) => {
            return (
              <Image
                src={colorItem.previewUrl}
                alt="изображение"
                className={classNames(
                  styles.colorPreviewImage,
                  colorItem.colorName == activeColor && styles.activeColor
                )}
                width={40}
                height={60}
                key={colorItem.colorName}
                onClick={() => setActiveColor(colorItem.colorName)}
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
              <div
                className={classNames(
                  styles.sizeElement,
                  size == selectedSize && styles.activeSize
                )}
                key={size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            );
          })}
      </div>
      <Button name="primaryPurpleBtn">Добавить в корзину</Button>
    </div>
  );
}
