export default function AdminWelcome() {
  return (
    <div className="w-screen h-screen flex bg-neutral-dark items-center justify-center">
      <h1 className="text-white text-center text-4xl md:text-8xl font-bold  p-10  border-4 rounded-lg ">
        <span className="underline decoration-double decoration-indigo-500">
          Welcome 
        </span>
        <br />
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          Admin!
        </span>
      </h1>
    </div>
  );
}
