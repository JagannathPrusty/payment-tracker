import axios from "axios"

const API = "http://localhost:5000/api/transactions"

const getAuthConfig = () => ({
headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}
})

export const getTransactions = () => {
return axios.get(API, getAuthConfig())
}

export const addTransaction = (data) => {
return axios.post(API, data, getAuthConfig())
}

export const updateTransaction = (id,data) => {
return axios.put(`${API}/${id}`, data, getAuthConfig())
}

export const deleteTransaction = (id) => {
return axios.delete(`${API}/${id}`, getAuthConfig())
}

export const getNotifications = () => {
return axios.get(`${API}/notifications`, getAuthConfig())
}