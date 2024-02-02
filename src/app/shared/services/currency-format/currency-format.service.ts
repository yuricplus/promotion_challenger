export const formatPrice = (price: number) => {
  return price.toLocaleString('pr-br', {
    style: 'currency',
    currency: 'BRL'
  })
}