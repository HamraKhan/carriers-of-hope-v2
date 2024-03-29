// Send a default GET request to /members to GET all members
export const getMembers = async () => {
  return await fetch("/members")
    .then(checkStatus)
    .then((res) => {
      return res.json();
    })
    .catch((error) =>
      console.log(`${error}: Looks like there was a problem fetching data`)
    );
};

// Send a default GET request to /member/:id to GET a member
export const getMemberById = async (memberId) => {
  return await fetch(`/members/${memberId}`)
    .then(checkStatus)
    .then((res) => {
      return res.json();
    })
    .catch((error) =>
      console.log(`${error}: Looks like there was a problem fetching data`)
    );
}

// Helper function taking care of fetch response logic
const checkStatus = (res) => {
  if (res.ok) {
    return Promise.resolve(res);
  } else {
    return Promise.reject(new Error(res.statusTex));
  }
};
