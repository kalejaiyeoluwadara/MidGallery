import React from 'react'
import {motion} from 'framer-motion'
function Sam() {
  return (
    <div className='h-screen bg-gray-900 w-screen '>
      <motion.div 
      initial={{
        top:'-200px'
      }}
      transition={{
        duration:2
      }}
      animate={{
        top:0
      }}
      whileTap={{
        scale:1.2
      }}
      className='h-12 w-12 bg-blue-500 '>

      </motion.div>
    </div>
  )
}

export default Sam
