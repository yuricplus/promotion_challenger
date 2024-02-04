export const formatPrice = (price: number):string => {
  return price.toLocaleString('pr-br', {
    style: 'currency',
    currency: 'BRL',
  })
}