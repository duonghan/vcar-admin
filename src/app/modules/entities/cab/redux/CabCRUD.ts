import axios from 'axios'
import { CabModel } from '../models/cab.model'

const API_URL = process.env.REACT_APP_API_URL || 'api'

export const GET_ALL_CAB = `${API_URL}/cabs`

export function getAllCabs() {
  return axios.get<CabModel[]>(GET_ALL_CAB)
}
