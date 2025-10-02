let startX = 0;
let endX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  let distance = endX - startX;

  // Nếu vuốt đủ dài (ví dụ > 100px) thì chuyển trang
  if (distance > 100) {
    window.location.href = "order.html";
  }
});
