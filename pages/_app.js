import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import Layout from "../src/components/commons/layout"
import { Global } from '@emotion/react'
import {globalStyles} from'../src/commons/styles/globalStyles'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <>
      <Global styles={globalStyles}/>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
    </>
  
  )
}


export default MyApp
