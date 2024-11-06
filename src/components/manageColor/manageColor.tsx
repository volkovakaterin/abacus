import CellColor from '../cellColor/cellColor';
import style from './manageColor.module.scss';

interface ManageColorProps {
    colors: object,
    title: string,
    setColor: (color: string) => void,
}

export default function ManageColor({ colors, title, setColor }: ManageColorProps) {
    return (
        <div className={style.ManageColor}>
            <span className={style.title}>{title}</span>
            <div className={style.cellContainer}>
                {Object.values(colors).map((value, index) =>
                    <CellColor color={value} key={index} setColor={setColor} />)}
            </div>
        </div>
    )
}