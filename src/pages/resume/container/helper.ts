import httpMethods from "service/index";

export const resumeDownload = async (resumeId: string, fileName: string) => {
  try {
    const response = await httpMethods.get(`/resume/download/${resumeId}`, {
      responseType: "blob", // crucial for handling binary data
    });
    // Create a Blob from the response
    const url = window.URL.createObjectURL(new Blob([response]));

    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName); // Suggested file name
    document.body.appendChild(link);
    link.click();

    // Cleanup
    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Download failed:", err);
  }
};
