const FIREBASE_DOMAIN =
  // "https://react-router-42a29-default-rtdb.firebaseio.com/";
  "https://thapar-lms-default-rtdb.firebaseio.com/";
// const dat = JSON.stringify(localStorage.getItem("email"));

// const dat = "22";
export async function getAllQuotes() {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(`${FIREBASE_DOMAIN}/${dat}/orders.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(
    `${FIREBASE_DOMAIN}/${dat}/orders/${quoteId}.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
}

export async function addQuote(quoteData) {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(`${FIREBASE_DOMAIN}/${dat}/orders.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function deleteQuote(quoteId) {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(
    `${FIREBASE_DOMAIN}/${dat}/orders/${quoteId}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not delete");
  }
  return null;
}
export async function addComment(requestData) {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(
    `${FIREBASE_DOMAIN}/${dat}/comments/${requestData.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(
    `${FIREBASE_DOMAIN}/${dat}/comments/${quoteId}.json`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
