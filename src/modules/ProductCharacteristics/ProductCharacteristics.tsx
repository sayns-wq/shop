import styles from "./ProductCharacteristics.module.scss";
import { productCharacteristics } from "@/interfaces/common";

interface ProductCharacteristicsProps {
  characteristics: productCharacteristics[];
}
export default function ProductCharacteristics({
  characteristics,
}: ProductCharacteristicsProps) {
  return (
    <div className={styles.productCharacteristics}>
      <h2>Характеристики</h2>
      <div className={styles.characteristics}>
        {characteristics &&
          characteristics.map((characteristic) => {
            return (
              <div
                className={styles.chareacteristicsWrapper}
                key={characteristic.title}
              >
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
  );
}
