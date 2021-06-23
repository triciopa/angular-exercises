export class Product2 {

  name: string;
  quantity: number;
  department: string;

  constructor(pName: string = '', pQuantity: number = 0, pDepartment: string = '') {
    this.name = pName;
    this.quantity = pQuantity;
    this.department = pDepartment;
  }
}