interface productCharacteristics {
  title: string;
  characteristicItems: {
    characterTitle: string;
    character: string;
  }[];
}
export interface product {
  id: number;
  imageUrl: string;
  name: string;
  price: string | number;
  sizes?: number[];
  color: string;
  colors: [
    {
      colorName: string;
      previewUrl: string;
    }
  ];
  characteristics: productCharacteristics[];
  rating?: number;
}
