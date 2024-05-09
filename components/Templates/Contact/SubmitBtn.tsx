import React from "react";
import { useFormStatus } from "react-dom";

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="p-2 bg-primary text-white rounded-lg"
    >
      {pending ? "Submiting..." : "Submit"}
    </button>
  );
}

export default SubmitBtn;
