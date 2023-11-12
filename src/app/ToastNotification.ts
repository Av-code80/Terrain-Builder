import { toast } from "react-toastify"

const NotificationService = {
  success(message: string) {
    toast.success(message)
  },
  error(message: string) {
    toast.error(message)
  },
}

export default NotificationService
