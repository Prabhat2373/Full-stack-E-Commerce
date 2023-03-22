import Hero from '@/components/Hero/Hero'
import Sections from '@/components/Sections'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const index = () => {
  
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default index