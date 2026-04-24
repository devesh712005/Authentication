import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../main";
import Loading from "../Loading";

const Verify = () => {
  const { token } = useParams();
  const calledRef = useRef(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (calledRef.current) return; // 🚫 prevent double call
    calledRef.current = true;

    const verifyUser = async () => {
      try {
        const { data } = await axios.get(`${server}/api/v1/verify/${token}`);
        setSuccessMessage(data.message);
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message ||
            error.message ||
            "Verification failed",
        );
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [token]);

  if (loading) return <Loading />;

  return (
    <div className="w-[400px] m-auto mt-12 text-center">
      {successMessage && (
        <p className="text-green-500 text-2xl">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-green-500 text-2xl">{errorMessage}</p>
      )}
    </div>
  );
};

export default Verify;
