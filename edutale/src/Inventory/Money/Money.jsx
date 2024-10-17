import * as USER from "../../USER.json"

export default function Money() {
    return (
      <div className="money-token">
        <p className="money-num"> Points: {USER.money} </p>
      </div>
    )
}