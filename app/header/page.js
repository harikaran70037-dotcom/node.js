import React from 'react'

const page = () => {
  return (
    <div>
  <nav className="navbar">
     <Link href="/">   <h1>FurniHome</h1></Link>

        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>


    </div>
  )
}

export default page