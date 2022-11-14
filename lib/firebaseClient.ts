import { getApp, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
}

const initializeAppIfNecessary = () => {
  try {
    return getApp()
  } catch {
    return initializeApp(firebaseConfig)
  }
}

let app = initializeAppIfNecessary()

// let app
// if (typeof window !== 'undefined' && !getApps().length) {
//   app = initializeApp(firebaseConfig)
// } else {
//   app = getApp()
// }

const clientAuth = getAuth(app)

export { clientAuth }