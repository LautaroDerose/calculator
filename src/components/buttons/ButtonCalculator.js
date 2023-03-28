import { useAppContext } from "../Calculator/CalculatorState";

export default function ButtonCalculator({type, value, classType}){
    const calculator = useAppContext();
    function handleClick(){
        switch(type){
            case 'number':
                calculator.addNumber(parseInt(value));
                break;
            
            case 'operator':
                calculator.addOperation(value);
                break;
            
            case 'action':
                calculator.executeAction(value);
                break;
            
            default:
        }
    }

    return(
        <button className={`calc-btn ${classType} m-1 w-[100px] h-[100px]` } onClick={handleClick} > {value} </button>
    )
}