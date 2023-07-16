import { IInputProps } from "../../types/props"

const Input = ({value, handleInput}: IInputProps) => {
    return (
        <>
            <input value={value} onChange={(e) => handleInput(e)}/>
        </>
    )
}

export default Input