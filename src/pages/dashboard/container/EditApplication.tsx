import Button from "common/button";
import InputWithLabel, { Input, Select, Textarea } from "common/input";
import { useState } from "react";
import { EditInterviewRoundsProps, InterviewRound } from "../types";
import {
  applicationStatusTypes,
  getDropdownOptions,
  initialEditObj,
  performanceOptions,
} from "./helper";

const EditInterviewRounds = ({
  application,
  onSave,
  onCancel,
}: EditInterviewRoundsProps) => {
  const [newRound, setNewRound] = useState<InterviewRound>({
    ...initialEditObj,
    status: application.applicationStatus,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewRound({ ...newRound, [name]: value });
  };

  const handleSave = () => {
    onSave(newRound);
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Interview Round</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-700">
        <InputWithLabel
          label="Round Name"
          name="roundName"
          placeHolder="Round Name"
          value={newRound.roundName}
          onChange={handleChange}
        />
        <Select
          label="Perofrmance"
          name="performance"
          value={newRound.performance}
          onChange={handleChange}
          options={getDropdownOptions(performanceOptions)}
        />
        <Select
          label="Status"
          name="status"
          value={newRound.status as string}
          onChange={handleChange}
          options={getDropdownOptions(applicationStatusTypes)}
        />
        <InputWithLabel
          label="Next Interview Date"
          name="nextInterviewDate"
          placeHolder="Next Interview Date"
          type="date"
          value={newRound.nextInterviewDate as string}
          onChange={handleChange}
        />

        <Textarea
          label="Questions:"
          name="questionsAsked"
          placeHolder="Questions Asked"
          value={newRound.questionsAsked as string}
          onChange={handleChange}
          className="w-full"
          rows={4}
        />
        <Textarea
          label="Description"
          name="description"
          placeHolder="Description"
          value={newRound.description}
          onChange={handleChange}
          className="w-full"
          rows={4}
        />
        <InputWithLabel
          label="Next Followup Date"
          name="nextFollowup"
          placeHolder="Next Follow-up Date"
          type="date"
          value={newRound.nextFollowup}
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-4 mt-4 justify-end">
        <Button
          onClick={onCancel}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          className="bg-blue-500 text-white hover:bg-blue-600"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditInterviewRounds;
