import React, { useState } from 'react'
import "./guide.css"
function guide(){
    
    const [active,setactive] = useState("firstcard");

    return(
        <>
        <section className='guide'>
            <div>
            <div className="headero">
                <div className='innerbo' onClick={() => setactive("firstcard")}>Client</div>
                <div className='innerbo' onClick={() =>setactive("secondcard")}>Service Provider</div>
            </div>
            <section>
                {
             active === "firstcard" && <div>
                <div>
                    <div className='steps'>
                    <div className='boxie'>
                        <div className="img"><img src="https://th.bing.com/th/id/OIP.yuJe26_kjt6n-HWgIngyggHaD4?pid=ImgDet&rs=1" alt="" /></div>
                    
                        <div>1:Consult Expert</div>
                        <div className='inbox'>A paid optional legal consultancy service </div>
                     </div>
                    <div className='boxie'>
                        <div className="img"><img src="https://th.bing.com/th/id/OIP.revM5xe6xPlAF1dvthKnLQHaHf?w=196&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                        <div>2:Review Responses</div>
                        <div className='inbox'>Compare fees,rating,background for better options</div>
                         </div>
                    <div className='boxie'>
                        <div className="img"><img src="https://th.bing.com/th/id/R.36c53959a2aa235ebf936b6d1379d3c6?rik=vMsxN1QceVu92g&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fcheckmark-transparent%2fcheckmark-transparent-18.png&ehk=W7GQ24b3v9b7mDBtYQxNaHzTPx0m8ZdwvkJB%2fiI6iww%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
                        <div>3:Choose Provider</div>
                        <div className='inbox'>Select the required legal service provider according to your need</div>
                         </div>
                    <div className='boxie'>
                        <div className="img"><img src="https://th.bing.com/th/id/OIP.rEMFdjkL2_w7E7ix3N4mfwHaHa?w=199&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                        <div>4:Share details</div>
                        <div className='inbox'>Provide the details of your case or problem to the service provider</div>
                    </div>
                    <div className='boxie'>
                        <div className="img"><img src="https://th.bing.com/th/id/OIP.ioJqRyv6XLo_mUdVAtI0IAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                        <div>5:Book Appointment</div>
                        <div className='inbox'>Book your Appointment and the service provider will look into it and accept</div>
                    </div>
                    </div>
                    </div>
                    <button>Know More</button>
                </div>}
                
                
               { active === "secondcard" && <div>
                <div className='containero'>
                    <div className='steps'>
                    <div className='boxie'>
                        <div className='img'><img src="https://th.bing.com/th/id/OIP.zDTl2zIbGf_Prb_8QxmCiwHaF4?w=241&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                        <div>1:Register & Verify</div>
                        <div className="inbox">Register yourself and verify using valid documents</div>
                        </div>
                    <div className='boxie'>
                        <div className="img"><img src="https://th.bing.com/th/id/OIP.LfUcKCHKBamgN20k7KQWeAHaHT?w=206&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                        <div>2:Make profile</div>
                        <div className="inbox">Make your profile with all the important information for the clients</div>
                        </div>
                    <div className='boxie'>
                        <div className="img"><img src="https://th.bing.com/th/id/OIP.iMN6XKzI5AJoaSezzkQ2xAHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                        <div>3:We market your practice</div>
                        <div className="inbox">Save your time and money and let us expand your opportunities</div>
                        </div>
                    <div className='boxie'>
                        <div className='img'><img src="https://th.bing.com/th/id/OIP.TaRnLfvc2_QkS5GpMsSqqAHaJX?w=128&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                        <div>4:Finalise deal</div>
                        <div className="inbox">Accept the Appointment request of the client and finalise the deal</div>
                        </div>
                    <div className='boxie'>
                        <div className='img'><img src="https://th.bing.com/th/id/OIP.XQVJBA2qWaDtJ1qGduM6nQHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                        <div>5:Make Payment</div>
                        <div className='inbox'>Accept payment from the client through the weebsite according to your pay</div>
                        </div>
                    </div>                   
                    </div>
                    <button>Know More</button>
                </div>}
            </section>
            </div>
        </section>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </>
    )
}

export default guide

