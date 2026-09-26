import { StudentRawData } from "@/types/student";

type GetStudentDataResponse = StudentRawData & {
  roster?: StudentRawData[];
};

export async function getStudentData(
  email: string,
): Promise<GetStudentDataResponse> {
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

  return response.json();
}
