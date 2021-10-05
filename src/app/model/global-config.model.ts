import { StatusType } from '../modules/entities/common/models/status-type.model'

export interface IGlobalConfig {
  id?: number
  type?: string | null
  label?: string | null
  key?: string | null
  value?: string | null
  status?: StatusType | null
}

export const defaultValue: Readonly<IGlobalConfig> = {}
