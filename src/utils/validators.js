
export const userValidator=(email,phoneNo)=>{
   const isEmailValid= /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
   const isPhoneNoValid=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneNo)

   if(!isEmailValid) return "email is not valid"
   if(!isPhoneNoValid) return "phone number is not valid"

   return
}