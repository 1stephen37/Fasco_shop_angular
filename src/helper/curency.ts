export function transformCurrency(value: number): string {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'code' });
}
