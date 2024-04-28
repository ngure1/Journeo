import  ProtectRoutes  from '@/utils/ProtectRoutes';
import React from 'react'

interface Props{
    children : React.ReactNode;
}

export default function ProtectedLayout({children} : Props) {
  return (
    <ProtectRoutes>
        {children}
    </ProtectRoutes>
  )
}
