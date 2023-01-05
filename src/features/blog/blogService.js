import axios from 'axios'
import { base_url } from '../../utils/base_url'

const getBlog = async () => {
  const result = await axios.get(`${base_url}/blog/`)

  return result.data
}

const blogService = {
  getBlog
}

export default blogService
