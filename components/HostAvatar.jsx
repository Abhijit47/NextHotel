"use client";

import { useState } from "react";
import Image from "next/image";

export default function HostAvatar({ imageUrl = "" }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e) => {
    setImageError(true);
  };

  return (
    <div>
      {imageError ? (
        <Image
          src="https://placehold.co/100x100.png"
          alt="host_avatar"
          width={100}
          height={100}
          className="size-8 rounded-full"
          priority
        />
      ) : (
        <Image
          src={imageUrl}
          alt="host_avatar"
          width={100}
          height={100}
          className="size-8 rounded-full"
          onError={handleImageError}
          priority
        />
      )}
    </div>
  );
}
