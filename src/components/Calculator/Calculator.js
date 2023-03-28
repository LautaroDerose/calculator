import React from 'react'
import ButtonCalculator from '../buttons/ButtonCalculator'
import CalculatorScreen from './CalculatorScreen'
import CalculatorState from './CalculatorState'
import './Calculator.css'

const Calculator = () => {
    return (
        <CalculatorState>
            <div className="calculatorContainer">
            <CalculatorScreen/>
            <div className="container">
                <ButtonCalculator type="action" value="AC"/>
                <ButtonCalculator type="operator" value="%"/>
                <ButtonCalculator type="action" value="<=="/>
                <ButtonCalculator type="operator" value="/"/>
                <ButtonCalculator type="number" value="7"/>
                <ButtonCalculator type="number" value="8"/>
                <ButtonCalculator type="number" value="9"/>
                <ButtonCalculator type="operator" value="*"/>
                <ButtonCalculator type="number" value="4"/>
                <ButtonCalculator type="number" value="5"/>
                <ButtonCalculator type="number" value="6"/>
                <ButtonCalculator type="operator" value="-"/>
                <ButtonCalculator type="number" value="1"/>
                <ButtonCalculator type="number" value="2"/>
                <ButtonCalculator type="number" value="3"/>
                <ButtonCalculator type="operator" value="+"/>
                <ButtonCalculator type="action" value="+/-"/>
                <ButtonCalculator type="number" value="0"/>
                <ButtonCalculator type="action" value="."/>
                <ButtonCalculator type="action" value="="/>
            </div>
            </div>
        </CalculatorState>
    )
}

export default Calculator
