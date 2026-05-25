export function quizTransformStudentData(data: any) {
  const quizzes = Object.keys(data)
    .filter((key) => key.startsWith("quiz"))
    .sort((a, b) => {
      const numA = Number(a.replace("quiz", ""));
      const numB = Number(b.replace("quiz", ""));
      return numA - numB;
    })
    .map((key) => data[key]);

  return {
    email: data.email,
    name: data.name,
    student_id: data.student_id,
    quizzes,
  };
}
