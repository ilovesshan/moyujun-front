import { ElMessage, ElNotification } from 'element-plus'

class Message {

  static show = (message: string = "this is a message~"): void => {
    ElMessage(message);
  }

  static success = (message: string = "this is a message~"): void => {
    ElMessage({ message: message, type: 'success' })
  }

  static warning = (message: string = "this is a message~"): void => {
    ElMessage({ message: message, type: 'warning' })
  }

  static error = (message: string = "this is a message~"): void => {
    ElMessage({ message: message, type: 'error' })
  }
}

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


export {
  Message, Notification
}