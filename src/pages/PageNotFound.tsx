const PageNotFound = () => {
  return (
    <>
      <div className="center-item flex-col">
        <img src="/images/page.png" alt="page not found" width={400} />
        <div className="w-[600px] text-center mb-10">
          <p className="text-2xl font-bold">404, Page not found</p>
          <p className="text-gray-800">
            Something went wrong. It’s look that your requested could not be
            found. It’s look like the link is broken or the page is removed.
          </p>
        </div>
        <div className="flex gap-7 pb-10">
          <button
            className={`flex items-center justify-center rounded-sm text-gray-00 font-bold border bg-primary-500 px-6 py-[.7rem] gap-4`}
          >
            <span>
              <i className="fa-solid fa-arrow-left" />
            </span>
            <a href={"#"}>GO BACK</a>
          </button>
          <button
            className={`flex items-center justify-center rounded-sm text-primary-500 font-bold border border-primary-500 px-6 py-[.7rem] gap-4`}
          >
            <span>
              <i className="fa-solid fa-house" />
            </span>
            <a href={"/"}>GO TO HOME</a>
          </button>
        </div>
      </div>
    </>
  );
};
export default PageNotFound;
