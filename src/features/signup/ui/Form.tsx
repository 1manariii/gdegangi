"use client"

import { useEffect, useState } from "react"
import Steps from "./Steps"
import FormButtons from "./FormButtons"
import { useRouter } from "next/navigation" 

const questions = [
    "Enter your fullname",
    "Enter your mail",
    "Create your password",
    "The end"
]

export interface IData {
    firstName: null | string,
    secondName: null | string
    mail: null | string,
    password: null | string
}

const Form = () => {
    const [step, setStep] = useState(1)
    const [data, setData] = useState<IData>({
        firstName: null,
        secondName: null,
        mail: null,
        password: null
    })
    const router = useRouter();

    const handleData = (property: string, value: string) => {
        setData(prevState => ({
            ...prevState,
            [property]: value,
        }))
    }

    const handleStep = (operation: string) => {
        if (operation === 'next') {
            if (step === 1 && data.firstName && data.secondName) setStep(prevState => prevState + 1)
            if (step === 2 && data.mail) setStep(prevState => prevState + 1)
            if (step === 3 && data.password) setStep(prevState => prevState + 1)
        }
        if (operation === 'prev') setStep(prevState => prevState - 1)
    }

    useEffect(() => {
        if (step === 4) {
            const timer = setTimeout(() => {
                router.push('/')
            }, 5000)
            
            return () => clearTimeout(timer)
        }
    }, [step, router])
    return (
        <>
            <h1 className="text-2xl font-bold transition-all duration-200">{questions[step - 1]}</h1>
            <div className="w-full bg-slate-300 rounded-xl mt-6">
                <div className="rounded-xl p-2 transition-all duration-200 bg-gradient-to-r from-purple-500 to-blue-500"
                    style={{ width: `${(step / 4) * 100}%` }}
                >
                </div>
            </div>
            <Steps step={step} handleData={handleData} data={data} />
            <FormButtons step={step} handleStep={handleStep} />
        </>
    )
}

export default Form;