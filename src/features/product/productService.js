import axios from 'axios'
import { base_url } from '../../utils/base_url'

const getProducts = async () => {
  const result = await axios.get(`${base_url}/product/`)

  return result.data
}

const productService = {
  getProducts
}

export default productService
