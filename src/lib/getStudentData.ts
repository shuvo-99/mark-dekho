export async function getStudentData(email: string) {
  const response = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
    cache: "no-store",
  });

  // console.log('response----->',response.json());
  

  if (!response.ok) {
    throw new Error("Failed to fetch student data");
  }

  return response.json();
}
