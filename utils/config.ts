declare var process: {
  env: {
    REACT_APP_API_URL: string
  }
}
export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000"

//  Using this file for having a scalable and maintainable project in the future
