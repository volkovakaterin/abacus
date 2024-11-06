export function handleSetNumber(number: string, setNumber: (number: number | string) => void) {

    const newNumber = parseInt(number, 10);
    setNumber(newNumber < 0 ? 0 : isNaN(newNumber) ? '' : newNumber);
}