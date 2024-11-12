import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({userInput}) {
    const resultData = calculateInvestmentResults(userInput);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment; 
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map(yeardata => {
                    const totalInterest = yeardata.valueEndOfYear - yeardata.annualInvestment * yeardata.year - initialInvestment;
                    const totalInvested = yeardata.valueEndOfYear - totalInterest;
                    return (
                        <tr key={yeardata.year}>
                            <th>{yeardata.year}</th>
                            <th>{formatter.format(yeardata.valueEndOfYear)}</th>
                            <th>{formatter.format(yeardata.interest)}</th>
                            <th>{formatter.format(totalInterest)}</th>
                            <th>{formatter.format(totalInvested)}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}