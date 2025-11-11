import NavigationButton from "./navigation-button";

export default function NotAuthorizedMessage({ href }) {
  return (
    <div className=" flex flex-col items-center justify-center gap-4">
      <h1 className=" text-white font-quicksand font-extrabold text-2xl">
        Not Authorized
      </h1>

      <div className=" w-full max-w-[180px]">
        <NavigationButton href={href}>Login</NavigationButton>
      </div>
    </div>
  );
}
