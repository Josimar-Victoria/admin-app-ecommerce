import axios from 'axios'
import { base_url } from '../../utils/base_url'

const getUsers = async () => {
  const result = await axios.get(`${base_url}/user/all-users/`)

  return result.data
}

const customerService = {
  getUsers
}

export default customerService
