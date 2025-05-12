import { FC } from "react";

interface IProps {
    step: number,
    handleStep: (operation: string) => void
}

const FormButtons: FC<IProps> = ({ step, handleStep }) => {
    return (
        <div className="flex w-full mt-auto">
            {step >= 2 && (
                <button
                    onClick={() => handleStep('prev')}
                    className="py-2 px-4 rounded-md bg-purple-300 text-purple-950 transition-all duration-200 hover:shadow-md hover:bg-purple-500 hover:text-purple-200">
                    Prev step
                </button>
            )}
            {step >= 1 && step < 4 && (
                <button
                    onClick={() => handleStep('next')}
                    className="ml-auto py-2 px-4 rounded-md bg-purple-300 text-purple-950 transition-all duration-200 hover:shadow-md hover:bg-purple-500 hover:text-purple-200">
                    Next step
                </button>
            )}
        </div>
    )
}

export default FormButtons;