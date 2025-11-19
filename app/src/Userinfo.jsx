import React from 'react'
import { useSelector } from 'react-redux'

export default function Userinfo() {
    const data = useSelector((state) => state.user)

    return (
        <div className="p-3 bg-light rounded border shadow-sm">

            <h3 className="text-success fw-bold mb-0 text-center">
                User: <span className="text-primary">{data.username}</span> 
                {' '} | {' '}
                Balance: <span className="text-danger">₹{data.balance}</span>
            </h3>

        </div>
    )
}
