let startX = 0;
let currentX = 0;
let threshold = 100; // khoảng cách tối thiểu để chuyển trang
let isDragging = false;
let page = document.documentElement; // lấy cả html (bao trùm toàn trang)

function startDrag(x) {
  startX = x;
  currentX = startX;
  isDragging = true;
  page.style.transition = ""; // bỏ transition khi đang kéo
}

function moveDrag(x) {
  if (!isDragging) return;
  currentX = x;
  let translateX = Math.max(0, currentX - startX);
  page.style.transform = `translateX(${translateX}px)`;
}

function endDrag() {
  if (!isDragging) return;
  isDragging = false;

  let distance = currentX - startX;

  if (distance > threshold) {
    // Kéo đủ xa -> trượt hẳn ra ngoài rồi navigate
    page.style.transition = "transform 0.3s ease-out";
    page.style.transform = "translateX(100vw)";
    page.addEventListener(
      "transitionend",
      () => {
        window.location.href = "order.html";
      },
      { once: true }
    );
  } else {
    // Kéo chưa đủ -> trả về chỗ cũ
    page.style.transition = "transform 0.3s ease-out";
    page.style.transform = "translateX(0)";
  }
}

// --- Touch (mobile) ---
document.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientX));
document.addEventListener("touchmove", (e) => moveDrag(e.touches[0].clientX));
document.addEventListener("touchend", endDrag);

// --- Mouse (PC) ---
document.addEventListener("mousedown", (e) => startDrag(e.clientX));
document.addEventListener("mousemove", (e) => moveDrag(e.clientX));
document.addEventListener("mouseup", endDrag);
