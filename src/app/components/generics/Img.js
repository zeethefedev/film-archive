"use client";

import Image from "next/image";
import React, { useState } from "react";

function Img(props) {
  const {
    width = "auto",
    height = "auto",
    src,
    alt,
    aspectRatio,
    objectFit = "cover",
    local,
    blur,
  } = props;

  const imageData = !local && src.split("/");
  const ratio = !local
    ? imageData.find((data) => data.includes("x"))?.replace("x", "/")
    : "auto";
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        aspectRatio: aspectRatio || ratio,
      }}
    >
      {local ? (
        <Image width={width} src={src} alt={alt} />
      ) : (
        <Image
          src={src}
          alt={alt}
          sizes={width}
          fill
          placeholder={blur ? "blur" : "empty"}
          blurDataURL={blur}
          // placeholder="blur"
          // blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFBd0FFQU1CSWdBQ0VRRURFUUgveEFBcEFBQURBUUFBQUFBQUFBQUFBQUFBQUFBQ0JBVUhBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUQvOW9BREFNQkFBSVFBeEFBQUFCNmZsSkV2Ly9FQUI4UUFBSUJCUUFEQVFBQUFBQUFBQUFBQUFFQ0F3QUZFU0V4QmhJVEZmL2FBQWdCQVFBQlB3Q2J6R3h3U1R4aHAzMzBSbkdhL2V0dHlZcEg5UTNRWFFnR2pMSTJ5N2N6Mm5kL1RKa2M3eHRqWC8vRUFCa1JBQUlEQVFBQUFBQUFBQUFBQUFBQUFBSVJBQUVERlAvYUFBZ0JBZ0VCUHdEcjFvbWhuLy9FQUJvUkFBSUNBd0FBQUFBQUFBQUFBQUFBQUFFUkFBTUVFbEgvMmdBSUFRTUJBVDhBR0pRZ3QzMXovOWs9JyAvPgogICAgPC9zdmc+CiAg"
          onLoad={() => setImageLoading(false)}
          style={{
            objectFit,
            filter: isImageLoading ? "blur(5px)" : "blur(0px)",
            transition: "filter 0.3s ease-in",
          }}
        />
      )}
    </div>
  );
}

export default Img;
