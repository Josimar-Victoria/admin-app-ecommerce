import axios from 'axios'
import { base_url } from '../../utils/base_url'

const getBrands = async () => {
  const result = await axios.get(`${base_url}/brand/`)

  return result.data
}

const brandService = {
  getBrands
}

export default brandService
