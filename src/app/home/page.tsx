'use client'
 
// This is a Client Component (same as components in the `pages` directory)
// It receives data as props, has access to state and effects, and is
// prerendered on the server during the initial page load.
function Home() {
  return (
    <div>
      <div>Welcome to my site!</div>
      <div>My name is Leo LeBlanc III and I'm a full stack engineer specializing in React and Typescript.</div>
      See which projects I've contributed to <a href={""}>here!</a> 
    </div>
  )
}

export default Home;