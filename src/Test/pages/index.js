function Home({ hello, world }) {
  return (
    <div>
      <h1>{hello} {world}!</h1>
    </div>
  )
}

Home.getInitialProps = async(ctx) => {
  return {
    hello: 'Hello',
    world: 'World'
  }
}

export default Home