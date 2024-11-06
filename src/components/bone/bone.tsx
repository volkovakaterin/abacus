import useAbacusStore from '../../store/store';
import style from './bone.module.scss';


export default function Bone() {
    const { colorBone } = useAbacusStore((state) => state)
    return (
        <div className={`${style.Bone} ${style[colorBone]}`}>
        </div>
    )
}