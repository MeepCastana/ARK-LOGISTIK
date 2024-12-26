function Colors() {
  return (
    <div className="flex-col space-y-2 pt-5">
      <div className="bg-[#0a150f] w-full h-full p-2 rounded-full text-zinc-200 border-white border-2">
        Text - #0a150f
      </div>
      <div className="bg-[#f7fbf8] w-full h-full p-2 rounded-full text-zinc-900 border-black border-2">
        Background - #f7fbf8
      </div>
      <div className="bg-[#5fb387] w-full h-full p-2 rounded-full text-zinc-900 border-black border-2">
        Primary - #5fb387
      </div>
      <div className="bg-[#a697ce] w-full h-full p-2 rounded-full text-zinc-900 border-black border-2">
        Secondary - #a697ce
      </div>
      <div className="bg-[#bb80c3] w-full h-full p-2 rounded-full text-zinc-900 border-black border-2">
        Accent - #bb80c3
      </div>
    </div>
  );
}

export default Colors;
