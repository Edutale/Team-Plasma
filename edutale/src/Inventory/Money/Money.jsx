export default function Money({moneyAmt}) {
    return toString(moneyAmt) && (
      <div className="money-token">
        <p className="money-num"> Money: {moneyAmt} </p>
      </div>
    )
}