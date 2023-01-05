import axios from 'axios'
import { base_url } from '../../utils/base_url'

const getBlogCategory = async () => {
  const result = await axios.get(`${base_url}/blogcategory/`)

  return result.data
}

const blogCategoryService = {
  getBlogCategory
}

export default blogCategoryService
