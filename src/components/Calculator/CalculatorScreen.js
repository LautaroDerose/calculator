import React from 'react'
import { useAppContext } from './CalculatorState'

const CalculatorScreen = () => {

    const calculator = useAppContext();



    return (
        <div className="calculatorScreen">
            <div className='text-slate-700 mr-9 mb-2'>
                <span>Memory: {calculator.memory}</span>
                <span>Operation: {calculator.operation}</span>
                <span>Decimal: {calculator.isDecimal ? 'decimal' : 'entero'}</span>
                
            </div>
            <div className="calculatorCurrentValue text-slate-400 mr-9 mb-8 border-b-2 border-slate-600 ">
              {calculator.currentValue}{calculator.isDecimal ? '.' : ''}  
            </div>
        </div>

    )
}

export default CalculatorScreen
