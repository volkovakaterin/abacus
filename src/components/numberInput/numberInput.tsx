import style from './numberInput.module.scss';
import { handleSetNumber } from './service';



interface NumberInput {
    number: number | string,
    setNumber: (value: number | string) => void,
}



export default function NumberInput({ number, setNumber }: NumberInput) {

    return (
        <div className={style.NumberInput}>
            <input type='number' onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleSetNumber(e.target.value, setNumber)} value={number} />
        </div>
    )
}