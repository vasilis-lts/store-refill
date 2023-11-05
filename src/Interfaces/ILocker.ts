export interface ILocker {
  code: string;
  productId: null | number;
  open: boolean;
  active: boolean;
  selected?: boolean;
}
