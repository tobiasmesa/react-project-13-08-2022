const CartWidget = () => {
  return (
    <div className="pr-10 flex">
      <svg
        class="h-6 w-6 text-orange-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg> 
      <div className="pl-4"> Cart (4) </div>
    </div>
  );
};
export default CartWidget;
