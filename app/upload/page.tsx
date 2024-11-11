"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  console.log("--------------------------");

  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="my image"
        ></CldImage>
      )}
      <CldUploadWidget
        uploadPreset="hq0y5lho"
        onSuccess={(result, { widget }) => {
          if (result.event !== "success") return;

          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);

          console.log("onSuccess1", result); // { public_id, secure_url, etc }
        }}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
