"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function RoomCover({ roomCover, className }) {
  const [imgSource, setImageSource] = useState(roomCover);

  const fallBackSrc = "/no-image-placeholder.svg";

  useEffect(() => {
    setImageSource(roomCover);
  }, [roomCover]);

  // useCallback(() => {
  //   setImageSource(roomCover);
  // }, [roomCover]);

  // useLayoutEffect(() => {
  //   setImageSource(roomCover);
  // }, [roomCover]);

  return (
    <Image
      src={imgSource}
      alt={`room-cover-${crypto.randomUUID()}`}
      width={800}
      height={500}
      className={className}
      // priority={false}
      priority={false}
      onLoad={(e) => {
        // console.log(e.target.naturalWidth, e.target.naturalHeight);
        if (e.target.naturalWidth === 0) {
          setImageSource(fallBackSrc);
        }
      }}
      onError={() => setImageSource(fallBackSrc)}
    />
  );
}
