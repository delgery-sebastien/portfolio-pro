// components/CaseImage.tsx
import Image, { ImageProps } from "next/image";

export default function CaseImage(props: ImageProps){
  const { className = "", ...rest } = props;
  return (
    <Image
      {...rest}
      className={`rounded-xl border border-slate-800 ${className}`}
      loading={rest.priority ? undefined : "lazy"}
    />
  );
}
