import type { ContactForm, RegisterForm } from "@/utils"
import {useAxios} from "@vueuse/integrations/useAxios"
import axios from 'axios'

const BASE_URL = "https://backend.getlinked.ai"
const instance = axios.create({
    baseURL: BASE_URL,
  })
export const getCategories = () => {
    const { data, isFinished, isLoading,error } = useAxios('/hackathon/categories-list', { method: 'GET' }, instance, {immediate: true})
    return {data, isLoading, isFinished, error}
}
export const registerTeam = (form: RegisterForm) => {
    const { data, isFinished, isLoading,error, execute } = useAxios('/hackathon/registration', { method: 'POST',data: form }, instance, {immediate: false})
    return {data, isLoading, isFinished, error, execute}
}
export const submitContactForm = (form: ContactForm) => {
    const { data, isFinished, isLoading,error, execute } = useAxios('/hackathon/contact-form', { method: 'POST',data: form }, instance, {immediate: false})
    return {data, isLoading, isFinished, error, execute}
    // body
    // {
    //     "email":"sample@eexample.com",
    //     "phone_number":"0903322445533",
    //     "first_name": "Space Explore",
    //     "message": "I need further info"
    // }

    // {
    //     "id": 2,
    //     "email": "sample@eexample.com",
    //     "first_name": "Space Explore",
    //     "message": "I need further info"
    //   }
}