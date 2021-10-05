import { StatusType } from '../modules/entities/common/models/status-type.model'

export interface IFareConf {
  id?: number
  name?: string | null
  fareTypeId?: number | null
  price?: number | null
  priceOffset?: number | null
  surcharge?: number | null
  description?: string | null
  provinceNo?: number
  status?: StatusType | null
}

export const defaultValue: Readonly<IFareConf> = {}
