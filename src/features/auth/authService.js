import axios from 'axios'
import { base_url } from '../../utils/base_url'

const login = async user => {
  const result = await axios.post(`${base_url}/user/admin-login`, user)
  if (result.data) {
    localStorage.setItem('user', JSON.stringify(result.data))
  }
  return result.data
}

const authService = {
  login
}

export default authService
