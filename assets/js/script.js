let startX = 0;
let currentX = 0;
let threshold = 100; // khoảng cách cần để chuyển trang
let banner = document.querySelector(".banner-container");

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  currentX = startX;
});

document.addEventListener("touchmove", (e) => {
  currentX = e.touches[0].clientX;
  let translateX = Math.max(0, currentX - startX);
  // chỉ cho phép kéo sang phải, không kéo sang trái
  banner.style.transform = `translateX(${translateX}px)`;
});

document.addEventListener("touchend", () => {
  let distance = currentX - startX;

  if (distance > threshold) {
    // Animate mượt ra ngoài màn hình rồi chuyển trang
    banner.style.transition = "transform 0.3s ease-out";
    banner.style.transform = "translateX(100vw)";

    setTimeout(() => {
      window.location.href = "order.html";
    }, 300);
  } else {
    // Quay lại chỗ cũ
    banner.style.transition = "transform 0.3s ease-out";
    banner.style.transform = "translateX(0)";
  }

  // reset sau khi transition xong
  banner.addEventListener(
    "transitionend",
    () => {
      banner.style.transition = "";
    },
    { once: true }
  );
});
