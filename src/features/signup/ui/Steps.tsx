
import React, { FC } from 'react';
import { IData } from './Form';

interface IProps {
    step: number,
    data: IData,
    handleData: (property: string, value: string) => void
}

const Steps: FC<IProps> = ({ step, handleData, data }) => {
    if (step === 1) return (
        <div className="flex flex-col w-full gap-3 py-6">
            <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="#firstName" className="font-bold">Enter you firstname</label>
                <input
                    id="firstName"
                    type="text"
                    value={`${data["firstName"] || ''}`}
                    onChange={e => handleData('firstName', e.target.value)}
                    placeholder="Enter your firstname"
                    className="bg-purple-950 p-2 rounded-md w-full text-purple-100"
                />
            </div>
            <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="#secondName" className="font-bold">Enter you secondname</label>
                <input
                    id="secondName"
                    type="text"
                    value={`${data["secondName"] || ''}`}
                    onChange={e => handleData('secondName', e.target.value)}
                    placeholder="Enter your secondname"
                    className="bg-purple-950 p-2 rounded-md w-full text-purple-100"
                />
            </div>
        </div>
    )

    if (step === 2) return (
        <div className="flex flex-col w-full gap-3 py-6">
            <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="#mail" className="font-bold">Enter your mail</label>
                <input
                    id="mail"
                    type="text"
                    value={`${data["mail"] || ''}`}
                    onChange={e => handleData('mail', e.target.value)}
                    placeholder="Enter your mail"
                    className="bg-purple-950 p-2 rounded-md w-full text-purple-100"
                />
            </div>
        </div>
    )
    if (step === 3) return (
        <div className="flex flex-col w-full gap-3 py-6">
            <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="#password" className="font-bold">Create your password</label>
                <input
                    id="password"
                    type="password"
                    value={`${data["password"] || ''}`}
                    onChange={e => handleData('password', e.target.value)}
                    placeholder="Enter your password"
                    className="bg-purple-950 p-2 rounded-md w-full text-purple-100"
                />
            </div>
        </div>
    )
    if (step === 4) return (
        <div className="flex flex-col w-full gap-3 py-6 h-full">
            <div className="flex flex-col w-full h-full gap-1.5 align-center justify-center">
                <h1 className="text-3xl text-center">Congratulations 🎉</h1>
                <p className="text-xl text-center text-purple-800">
                    {data.firstName}, you have completed
                    your registration.
                </p>
            </div>
        </div>
    )
};

export default Steps;