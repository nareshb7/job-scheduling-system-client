import { useState, useEffect } from "react";
import { useAuthContext } from "authContext/index";
import Button from "common/button";
import { Input } from "common/input";
import httpMethods from "service/index";
import Spinner from "common/spinner";

interface InterviewQuestion {
  _id: string;
  question: string;
  answer?: string;
  company: string;
  createdAt: string;
}

const InterviewQuestionsPage = () => {
  const { currentuser } = useAuthContext();
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const fetchQuestions = async () => {
    const res = await httpMethods.get(
      `/interview-questions/${currentuser?._id}`
    );
    setQuestions(res.data);
  };

  const handleAdd = async () => {
    try {
      setIsLoading(true);
      await httpMethods.post("/interview-questions/add", {
        question: newQuestion,
        answer,
        userId: currentuser?._id,
      });
      setNewQuestion("");
      setAnswer("");
      fetchQuestions();
    } catch (err: any) {
      console.error("add_question_error", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [currentuser?._id]);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      {isLoading && <Spinner />}
      <h2 className="text-2xl font-bold">Interview Questions</h2>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <Input
          type="text"
          placeHolder="Question"
          className="w-full border p-2 mb-2 rounded"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <Input
          type="text"
          placeHolder="Answer (optional)"
          className="w-full border p-2 mb-2 rounded"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Question
        </Button>
      </div>

      <div className="space-y-3">
        {questions.map((q) => (
          <div
            key={q._id}
            className="border border-gray-300 dark:border-gray-600 rounded p-3 bg-gray-50 dark:bg-gray-900"
          >
            <p className="font-semibold">Q: {q.question}</p>
            {q.answer && <p className="text-gray-600">A: {q.answer}</p>}
            <p className="text-sm text-gray-500 mt-1">Asked at: {q.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewQuestionsPage;
