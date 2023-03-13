function onEnterViewport(id: string, callback: () => void) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      callback();
      observer.disconnect();
    }
  }, options);

  observer.observe(target);
}
export default onEnterViewport;
