let element: HTMLElement;
let offset = 0;

const onScroll = () => {
  if (!element) {
    return;
  }

  const bounding = element.getBoundingClientRect();
  console.log(bounding.bottom);
  console.log(
    (window.innerHeight || document.documentElement.clientHeight) + offset,
  );

  const isInViewPort =
    bounding.top >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + offset;

  if (isInViewPort) {
    element.classList.remove("hidden");
    element.classList.add("animation-land");
  }
};

export default {
  mounted: (el: HTMLElement, binding: { value: { offset: number } }) => {
    element = el;
    offset = binding.value.offset ?? 0;
    window.addEventListener("scroll", onScroll);
  },
  beforeUnmount: () => {
    window.removeEventListener("scroll", onScroll);
  },
};
