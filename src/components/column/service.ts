export function calculateHeight(bonesCount: number | string) {
    const heightForOneBone = 82;
    const heightForFourBones = 193;

    if (bonesCount === 1 || bonesCount === 0 || typeof bonesCount == "string") return heightForOneBone;
    if (bonesCount === 4) return heightForFourBones;

    const slope = (heightForFourBones - heightForOneBone) / (4 - 1);
    return heightForOneBone + slope * (bonesCount - 1);
}
