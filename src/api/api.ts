import axios from "axios"

const server = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})
// duels
export const getDuelsOpen = async () => {
  // Отдает список открытых дуэлей
  // Поддерживает гет параметры min_bet | max_bet | sorting
  let response = await server.get(`open/`)
  return response.data
}

export const getDuelsProfile = async () => {
  // Отдает все дуэли по токену пользователя
  let response = await server.get(`all/`)
  return response.data
}

export const getDuelsСompleted = async () => {
  // Отдает колличество завершенных дуэлей
  let response = await server.get(`completed/`)
  return response.data
}

export const createDuel = async () => {
  // Отдает колличество завершенных дуэлей
  let response = await server.post(`create/`)
  return response.data
}

// users

export const getInfoUser = async () => {
  // Отдает список информации о пользователи
  let response = await server.get(`users/user/`)
  return response.data
}

export const getUserJWT = async () => {
  // Отдает токены доступа, обновления, id пользователя и username
  let response = await server.get(`users/jwt/`)
  return response.data
}

export const sendReport = async () => {
  // Отдает токены доступа, обновления, id пользователя и username
  let response = await server.post(`users/report/`)
  return response.data
}

export const logout = async () => {
  // выход
  let response = await server.post(`users/auth_logout/`)
  return response.data
}

export const auth = async () => {
  // авторизация
  let response = await server.post(`users/auth_api/`)
  return response.data
}
