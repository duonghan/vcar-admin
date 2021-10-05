import { StatusType } from '../modules/entities/common/models/status-type.model'

export interface IFareType {
  id?: number
  name?: string | null
  description?: string | null
  rate?: number | null
  status?: StatusType | null
}

export const defaultValue: Readonly<IFareType> = {}
