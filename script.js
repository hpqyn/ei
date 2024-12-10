document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2023-11-17T00:00:00'); // Ngày bắt đầu yêu (sửa thành ngày 17/06/2023)
  
    function updateCountdown() {
      const now = new Date();
  
      // Tính khoảng cách thời gian giữa ngày hiện tại và ngày bắt đầu
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();
  
      // Điều chỉnh khi số tháng, ngày, giờ, phút, giây âm
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        // Tính số ngày trong tháng trước
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += previousMonth;
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }
  
      // Cập nhật vào DOM
      document.getElementById('years').textContent = years;
      document.getElementById('months').textContent = months;
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
    }
  
    // Cập nhật mỗi giây
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const neonChars = document.querySelectorAll('.neon-char');
  
    neonChars.forEach((char, index) => {
      char.style.animation = `fadeInChar 0.5s ease-in-out forwards ${index * 0.1}s`;
    });
  });
  