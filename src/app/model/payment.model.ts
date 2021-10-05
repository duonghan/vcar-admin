import { PaymentType } from './enumerations/payment-type.model'
import { StatusType } from '../modules/entities/common/models/status-type.model'

export interface IPayment {
  id?: number
  paymentType?: PaymentType | null
  issueDate?: string | null
  cardAccountNo?: string | null
  userId?: number | null
  status?: StatusType | null
}

export const defaultValue: Readonly<IPayment> = {}
