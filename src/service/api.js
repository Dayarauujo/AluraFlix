import axios from 'axios'

const BASE_URL = 'https://678ed065a64c82aeb1217762.mockapi.io'

export const api = axios.create({
    baseURL: BASE_URL
})

export const getVideos = async () => {
    const response = await api.get("video")
    return response.data
}

export const saveVideo = async (body) => {
    await api.post("video", body)
}

export const deleteVideo = async (id) => {
    await api.delete(`video/${id}`)
}