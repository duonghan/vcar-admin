import { StatusType } from '../modules/entities/common/models/status-type.model'

export interface IPromotion {
  id?: number
  name?: string | null
  rate?: number | null
  maxValue?: number | null
  minPrice?: number | null
  fromDate?: string | null
  toDate?: string | null
  status?: StatusType | null
}

export const defaultValue: Readonly<IPromotion> = {}
