import axios from 'axios'
import { base_url } from '../../utils/base_url'

const getProductCategory = async () => {
  const result = await axios.get(`${base_url}/category/`)

  return result.data
}

const productCategoryService = {
  getProductCategory
}

export default productCategoryService
