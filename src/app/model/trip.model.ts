import { TripStatus } from './enumerations/trip-status.model'
import { WeatherType } from './enumerations/weather-type.model'
import { TrafficStatus } from './enumerations/traffic-status.model'
import { TripRate } from './enumerations/trip-rate.model'

export interface ITrip {
  id?: number
  status?: TripStatus | null
  requestTime?: string | null
  weather?: WeatherType | null
  traffic?: TrafficStatus | null
  tripStartTime?: string | null
  tripWaitTime?: string | null
  riderRating?: TripRate | null
  driverRating?: TripRate | null
  reviewDescription?: string | null
  cancelReason?: string | null
}

export const defaultValue: Readonly<ITrip> = {}
