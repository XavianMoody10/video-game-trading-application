import { ClipLoader } from "react-spinners";

export default function LoadingPageOverlay() {
  return (
    <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/55 flex items-center justify-center">
      <ClipLoader color="white" size={30} />
    </div>
  );
}
