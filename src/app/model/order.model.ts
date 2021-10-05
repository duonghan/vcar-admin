import { OrderStatus } from './enumerations/order-status.model'

export interface IOrder {
  id?: number
  userId?: number | null
  tripId?: number | null
  cabId?: number | null
  paymentId?: number | null
  orderDate?: string | null
  fare?: number | null
  promotion?: number | null
  totalPrice?: number | null
  status?: OrderStatus | null
}

export const defaultValue: Readonly<IOrder> = {}
