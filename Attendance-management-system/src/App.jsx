import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const name = "Anushna"
  console.log(name)

  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <sidebar/>
          </div>
          <div className="col-md-9">
            <h2 class="mt-3">Dashboard</h2>
            <p>welcome to Attendence management system</p>
            <div className="row">
              <div className="col-md-3">
                <dashboardcard/>
              </div>
              <div className="col-md-3">
                <dashboardcard/>
              </div>
              <div className="col-md-3">
                <dashboardcard/>
              </div>
              <div className="col-md-3">
                <dashboardcard/>
              </div>
            </div>
            <h4 class="mt-3">Student List</h4>
                            <table class="table table-striped">
                                <thead class="bg-success">
                                    <tr>
                                        <th>Roll no</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>24AG1A05P5</td>
                                        <td>Anushna</td>
                                        <td>Present</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>24AG1A05P7</td>
                                        <td>Devayani</td>
                                        <td>Present</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>24AG1A05L1</td>
                                        <td>Pranathi</td>
                                        <td>Present</td>
                                    </tr>
                                </tbody>
                                
                                
                            </table>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
