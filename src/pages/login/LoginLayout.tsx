import React from 'react'

type Props={
 children: React.ReactNode
}

const LoginLayout:React.FC<Props> = ({children}) => {
  return (
    <div className='w-full flex flex-col items-center justify-center space-y-6'>
        <div>
        <img src="colorfilter.png" alt="logo" className='w-full h-auto'/>
        </div>
         <div>
            {children}
         </div>
        
    </div>
  )
}

export default LoginLayout