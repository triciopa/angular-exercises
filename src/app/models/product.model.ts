export class Product {
  name: string;
  imgUrl: string;
  price: number;
  q: number;

  constructor(pName: string, pImgUrl: string, pPrice: number) {
    this.name = pName;
    this.imgUrl = pImgUrl;
    this.price = pPrice;
    this.q = 0;
  }
}