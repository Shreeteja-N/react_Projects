import React , {useState} from 'react'
import OtpInput from './otpInput'

function PhoneotpForm() {


    const [phoneNumber ,setPhoneNumber]=useState("")
    const [showotpinput,setShowOtpInput]=useState(false)

    const handlePhoneNumber=(event)=>{
        setPhoneNumber(event.target.value)
    }

    const onOtpSubmit=(otp)=>{

console.log("Login Sucessful",otp);
    }
    

    const handePhoneSubmit=()=>{
        const regex=/[^0-9]/g
        if(phoneNumber.length<10 || regex.test(phoneNumber)){
            alert("invlid Phone Number ")
            return
        }
        setShowOtpInput(true);

    }

  return (
    <div className='App'>
        {!showotpinput?(
        <form onSubmit={handePhoneSubmit}>
            <input type='text' value={phoneNumber} onChange={handlePhoneNumber} placeholder='Enter phone Number'></input>
            <button>Submit</button>
        </form>
        ):(<div>
            <p>Enter the OTP sent to {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}></OtpInput>
            
        </div>
)}
      
    </div>

  )
}

export default PhoneotpForm
