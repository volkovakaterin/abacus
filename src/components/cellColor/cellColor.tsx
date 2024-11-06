import style from './cellColor.module.scss';

interface CellColorProps {
    color: string
    setColor: (color: string) => void,
}


export default function CellColor({ color, setColor }: CellColorProps) {
    return (
        <div className={`${style.CellColor} ${style[color]}`} onClick={() => setColor(color)}>
        </div>
    )
}