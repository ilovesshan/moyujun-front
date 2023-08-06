import { ElNotification } from 'element-plus'

class Notification {
  static success = (title: string = "Success", message: string = "Success Message~"): void => {
    ElNotification({ title: title, message: message, type: 'success' })
  }

  static warning = (title: string = "Warning", message: string = "Warning Message~"): void => {
    ElNotification({ title: title, message: message, type: 'warning' })
  }

  static info = (title: string = "Info", message: string = "Info Message~"): void => {
    ElNotification({ title: title, message: message, type: 'info' })
  }

  static error = (title: string = "Error", message: string = "Error Message~"): void => {
    ElNotification({ title: title, message: message, type: 'error' })
  }
}
