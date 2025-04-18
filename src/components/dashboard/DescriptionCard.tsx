import React from "react";

interface DescriptionProps {
  descriptionData: {
    [key: string]: string | string[];
  };
}

const DynamicDescription: React.FC<DescriptionProps> = ({
  descriptionData,
}) => {
  return (
    <>
      {Object.entries(descriptionData).map(([key, value]) => (
        <div key={key}>
          <h3 className="font-semibold capitalize text-lg mb-1">
            {key.replace(/_/g, " ")}:
          </h3>
          {Array.isArray(value) ? (
            <ul className="list-disc pl-5 text-gray-500">
              {value.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">{value}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default DynamicDescription;
