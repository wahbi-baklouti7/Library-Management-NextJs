const LIVRE_API = "/livres/";

export const fetchLivres = async () => {

  try{
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + LIVRE_API,
      { cache: "no-store" },
    );
  const response = await res.json();
  // console.log("data Service Livres !!!!!!!!!!!!!!!!!!!!!!!!!!: "+response.data)
    return response;
  }
  catch (error) {
    if (error.name === "SyntaxError") {
      console.error("Error parsing JSON:", error);
      // Handle the error gracefully, such as displaying an error message to the user
    } else {
      console.error("Error fetching data:", error);
    }
  }
};
// export const fetchLivres = async () => {
//   try {
//     const res = await fetch(
//       process.env.NEXT_PUBLIC_API_URL + LIVRE_API,
//       { cache: "no-store" },
//       {
//         method: "GET",
//       }
//     );
//     const response = await res.json();
//     console.log("data Service Livres !!!!!!!!!!!!!!!!!!!!!!!!!!: "+data)

//     return response;

//   } catch (error) {
//     if (error.name === "SyntaxError") {
//       console.error("Error parsing JSON:", error);
//       // Handle the error gracefully, such as displaying an error message to the user
//     } else {
//       console.error("Error fetching data:", error);
//     }
//   }
// };

// export const fetchLivreById = async (livreId) => {
//   const res = await fetch(
//     process.env.NEXT_PUBLIC_API_URL + LIVRE_API + `${livreId}`,
//     { cache: "no-store" },
//     {
//       method: "GET",
//     }
//   );
//   const response = await res.json();
//   return response;
// };

export const deleteLivre = async (livreId) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + LIVRE_API + `${livreId}`,
    {
      method: "DELETE",
    }
  );
  const response = await res.json();
  return response;
};

export const addLivre = async (livre) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + LIVRE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(livre),
  });
  const response = await res.json();
  return response;
};

export const editLivre = async (livre) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + LIVRE_API + `${livre._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livre),
    }
  );
  const response = await res.json();
  return response;
};
