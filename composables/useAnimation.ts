export default function (
  elements: Array<Ref<HTMLElement | null>>,
  offset: number = 240,
) {
  const init = () => {
    elements.forEach((element) => {
      if (!element.value) {
        return;
      }
      element.value.classList.add("invisible");
    });
  };
  const onScroll = () => {
    elements.forEach((element) => {
      if (!element.value) {
        return;
      }

      const bounding = element.value.getBoundingClientRect();
      const isInViewPort =
        bounding.top >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) +
            offset;

      if (isInViewPort) {
        element.value.classList.remove("invisible");
        element.value.classList.add("animation-land");
      }
    });
  };

  onMounted(() => {
    init();
    window.addEventListener("scroll", onScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
