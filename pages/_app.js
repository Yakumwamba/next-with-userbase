import { useState, useEffect } from 'react'
import userbase from 'userbase-js'
import Layout from '../components/layout'

import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState()

  useEffect(() => {
    userbase.init({ appId: "ffc3d1fc-458d-40a6-9dff-06bab5234992"})
  }, [])
// QKWfk5/IqUwrQjVjPxWV9ZCr+zWVf3te4AyYK1Kgx8I=
  return (
    <Layout user={user} setUser={setUser}>
      <Component user={user} {...pageProps} />
    </Layout>
  )
}

export default MyApp
