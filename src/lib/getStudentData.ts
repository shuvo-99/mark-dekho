export async function getStudentData(email: string) {
  console.log("email --", email);

  const response = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch student data");
  }

  console.log("res -- ", response);

  // const text = await response.text();

  // console.log(text);

  return response.json();
}
