import React from "react";

function Quiz() {
  return (
    <form id="form1">
      <p>1.Who won the ICC ODI World Cup in 2011 ?</p>
      <label>
        <input type="radio" />
        India
      </label>
      <label>
        <input type="radio" />
        Australia
      </label>
      <label>
        <input type="radio" />
        Others
      </label>
      <div>
        <button type="action" value="Previous">
          Previous
        </button>
        <button type="submit" value="Submit">
          Submit
        </button>
        <button type="action" value="Next">
          Next
        </button>
        <button type="action" value="ShowAnswer">
          ShowAnswer
        </button>
      </div>
    </form>
  );
}

export default Quiz;
