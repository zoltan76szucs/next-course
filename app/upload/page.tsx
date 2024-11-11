"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="hq0y5lho">
      {({ open }) => {
        return (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload an Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default UploadPage;
