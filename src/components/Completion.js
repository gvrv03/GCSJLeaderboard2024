import Link from 'next/link'
import React from 'react'

const Completion = () => {
  return (
    <section className='fixed  font-semibold flex gap-5 w-full md:w-auto md:bottom-auto bottom-0 items-center md:top-20 md:right-5 px-5 py-2  rounded-t-md md:rounded-md  bg-blue-500 text-white' >
        <i className='uil uil-file-info-alt text-2xl' />
        <Link href="/" >Fill Course Completion Form</Link>
    </section>
  )
}

export default Completion