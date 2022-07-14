import React from "react";

function GuestLogin() {
  return (
    <>
      <form>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Address Line 1</label>
        <input type="text" />
        <label>Address Line 2</label>
        <input type="text" />
        <label>email</label>
        <input type="email" />
        <label>telephone</label>
        <button>submit</button>
      </form>
    </>
  );
}

export default GuestLogin;
