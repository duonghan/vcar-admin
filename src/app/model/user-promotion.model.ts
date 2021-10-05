import { StatusType } from '../modules/entities/common/models/status-type.model'

export interface IUserPromotion {
  id?: number
  userId?: number | null
  promotionId?: number | null
  status?: StatusType | null
}

export const defaultValue: Readonly<IUserPromotion> = {}
