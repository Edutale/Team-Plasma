export default function Money({moneyAmt}) {
    return moneyAmt && (
      <div className="money-token">
        <p className="money-num"> Money: {moneyAmt} </p>
      </div>
    )
}