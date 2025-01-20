import HeadingLoading from "./HeadingLoading";

const Loading = () => {
  return (
    <div className="w-11/12 mx-auto min-h-svh py-12 space-y-6">
      <HeadingLoading/>
      <div className="space-y-4 p-4 rounded">
        <div className="w-full h-6 skeleton" />
        <div className="flex gap-4">
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
        </div>
        <div className="flex gap-4">
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
        </div>
      </div>
      <div className="space-y-4 p-4 rounded">
        <div className="w-full h-6 skeleton" />
        <div className="flex gap-4">
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
        </div>
        <div className="flex gap-4">
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
        </div>
      </div>
      <div className="space-y-4 p-4 rounded">
        <div className="w-full h-6 skeleton" />
        <div className="flex gap-4">
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
        </div>
        <div className="flex gap-4">
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
          <div className="w-1/4 h-6 skeleton" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
