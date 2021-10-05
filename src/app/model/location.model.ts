import { LocationType } from './enumerations/location-type.model'

export interface ILocation {
  id?: number
  type?: LocationType | null
  postalCode?: string | null
  detail?: string | null
  ward?: string | null
  district?: string | null
  province?: string | null
  latitude?: number | null
  longitude?: number | null
}

export const defaultValue: Readonly<ILocation> = {}
