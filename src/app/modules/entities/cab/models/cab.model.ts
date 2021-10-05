import { CabType } from './cab-type.model'
import { StatusType } from '../../common/models/status-type.model'

export interface CabModel {
  id?: number
  regNo?: number | null
  brand?: string | null
  model?: string | null
  type?: CabType | null
  baseRate?: number | null
  status?: StatusType | null
}

export const defaultValue: Readonly<CabModel> = {}
