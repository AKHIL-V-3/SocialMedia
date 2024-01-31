import dotenv from 'dotenv'
dotenv.config()

export default function getConfigs() {

  return {

    server: {
      name: "Authentication",
      port: process.env.SERVER_PORT || 5001,
      baseURl: "/",
      serverId: "1",
      appBaseUrl: "/auth",
      adminBaseUrl: "/auth/su",
    },

    database: {
      url: process.env.DATABASE_URL
    }
  }
}