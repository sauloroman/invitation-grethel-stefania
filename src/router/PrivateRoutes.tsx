import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Invitation, Ticket, Envelop } from '@/modules'

export const PrivateRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Envelop />} />
            <Route path='/invitation' element={<Invitation />} />
            <Route path='/ticket' element={<Ticket />} />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    )
}