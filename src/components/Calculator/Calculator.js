import React from 'react'
import ButtonCalculator from '../buttons/ButtonCalculator'
import CalculatorScreen from './CalculatorScreen'
import CalculatorState from './CalculatorState'
import './Calculator.css'
import styles from './styles'

const Calculator = ({classType}) => {
    return (
        <CalculatorState>
            <div className="calculatorContainer min-w-[650px] p-20 border-[5px] border-slate-800 rounded-2xl " >
            <CalculatorScreen/>
            <div className="container">
                <ButtonCalculator classType={styles.ACButton} type="action" value="AC"/>
                <ButtonCalculator classType={styles.actionButton} type="operator" value="%"/>
                <ButtonCalculator classType={styles.actionButton} type="action" value="<=="/>
                <ButtonCalculator classType={styles.operatorButton} type="operator" value="/"/>
                <ButtonCalculator classType={styles.numberButton} type="number" value="7"/>
                <ButtonCalculator classType={styles.numberButton} type="number" value="8"/>
                <ButtonCalculator classType={styles.numberButton} type="number" value="9"/>
                <ButtonCalculator classType={styles.operatorButton} type="operator" value="*"/>
                <ButtonCalculator classType={styles.numberButton} type="number" value="4"/>
                <ButtonCalculator classType={styles.numberButton} type="number" value="5"/>
                <ButtonCalculator classType={styles.numberButton} type="number" value="6"/>
                <ButtonCalculator classType={styles.operatorButton} type="operator" value="-"/>
                <ButtonCalculator classType={styles.numberButton} type="number" value="1"/>
                <ButtonCalculator classType={styles.numberButton} type="number" value="2"/>
                <ButtonCalculator classType={styles.numberButton} type="number" value="3"/>
                <ButtonCalculator classType={styles.operatorButton} type="operator" value="+"/>
                <ButtonCalculator classType={styles.actionButton} type="action" value="+/-"/>
                <ButtonCalculator classType={styles.numberButton} type="number" value="0"/>
                <ButtonCalculator classType={styles.actionButton} type="action" value="."/>
                <ButtonCalculator classType={styles.operatorButton} type="action" value="="/>
            </div>
            </div>
        </CalculatorState>
    )
}

export default Calculator
