import React from 'react'

function Navbar() {
  return (
    <nav class="navbar bg-primary">
        <div class="container-fluid d-flex justify-content-between">
            <span class="text-white me-3">attendance management system</span>
            <div>
            <span class="text-white me-3">welcome anushna</span>
            <a href="login.html" class="text-white text-decoration-none">logout</a>
        </div>
        </div>
        

    </nav>
  )
}

export default Navbar
