export default function ButtonCard(props) {
  const { bgColor, setbgColor } = props;
  const color = ["red", "blue", "yellow", "pink", "purple", "olive"];
  return (
    <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white text-black px-3 py-3 rounded-3xl">
      {color.map((color, colorindex) => {
        return (
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg hover:bg-gray-200 "
            onClick={() => {
              setbgColor(color);
            }}
            key={colorindex}
          >
            {color}
          </button>
        );
      })}
    </div>
  );
}
