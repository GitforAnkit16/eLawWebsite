import React from 'react'
import "./Appointment.css"
function Appointment() {
  return (
 <div className='appointment'>
        <h1>Appointment Section</h1>
    <div className='informations'>
        <div className='information'>
            <p>Enter your Name</p>
            <input type='text' placeholder='Enter your Name' />
        </div>
        <div className='information'>
            <p>Enter your Problem</p>
            <input type='text' placeholder='Enter your problem ' />
        </div>
        <div className='information'>
            <p>Enter the range of fees you can provide(in Rs)</p>
            <input type='text' placeholder='Start' />
            <input type='text' placeholder='End' />
        </div>
        <div className='information'>
            <p>Dates available(in DD/MM/YYYY format)</p>
            <input type='text' placeholder='Start' />
            <input type='text' placeholder='End' />
        </div>
        <div className='information'>
        <label htmlFor="">Type of Case  </label>
          <select name="Profession" id="prof">
            <option value="Criminal Law">Criminal Law</option>
            <option value="Civil Law">Civil Law</option>
            <option value="Family Law">Family Law</option>
            <option value="Environmental Law">Environmental Law</option>
            <option value="Intellectual Property Law">Intellectual Property Law</option>
            <option value="Property Law">Property Law</option>
            <option value="Criminal Procedure Law">Criminal Procedure Law</option>
            <option value="Tax Law">Tax Law</option>
            <option value="Military Law">Military Law</option>
          </select>
        </div>
        <button>Send Request</button>
    </div>
</div>
  )
}

export default Appointment