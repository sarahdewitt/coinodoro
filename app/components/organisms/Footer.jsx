import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full px-5 py-2 text-center mt-10'>
        <p className='text-sm'>Made with ❤️ by <Link className='underline' href={'https://github.com/sarahdewitt'}>Sarah De Witt</Link></p>
    </div>
  )
}
