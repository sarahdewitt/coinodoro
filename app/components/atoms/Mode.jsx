import React from 'react'

export default function Mode({children, color}) {
  return (
    <div className={`px-5 py-2 rounded-full bg-opacity-50 timerbg`}>
        <p className={`text-sm font-semibold timertext`}>{children}</p>
    </div>
  )
}
