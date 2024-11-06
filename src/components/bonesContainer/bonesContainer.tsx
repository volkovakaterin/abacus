import style from './bonesContainer.module.scss';
import Bone from '../bone/bone';

interface BonesContainerProps {
    bones: number;
}

export default function BonesContainer({ bones }: BonesContainerProps) {
    return (
        <div className={style.BonesContainer}>
            {Array.from({ length: bones }, (_, index) => (
                <Bone key={index} />
            ))}
        </div>
    )
}