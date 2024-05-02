export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment ($)</label>
          <input
            type="number"
            required
            value={Number(userInput.initialInvestment).toString()}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment ($)</label>
          <input
            type="number"
            required
            value={Number(userInput.annualInvestment).toString()}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            required
            value={Number(userInput.expectedReturn).toString()}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration (years)</label>
          <input
            type="number"
            required
            value={Number(userInput.duration).toString()}
            max={50}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
