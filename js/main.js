window.addEventListener("load", function () {
  // ===== top으로 가는 버튼
  const topBtn = document.getElementById("topBtn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // 조건문 수정
    if (window.scrollY === 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });

  // ===== chat 버튼 클릭
  // const chatBtn = document.getElementById('chatBtn');
  // const chatTextBox = document.querySelector('.chat-text-box');

  // chatBtn.addEventListener('click', function (event) {
  //     // chat-text-box의 display 속성을 토글하여 나타내거나 숨김
  //     if (chatTextBox.style.display === 'none' || chatTextBox.style.display === '') {
  //         chatTextBox.style.display = 'block';
  //     } else {
  //         chatTextBox.style.display = 'none';
  //     }
  // });

  // ======= chat 버튼 모바일
  const chatBtn = document.getElementById("chatBtn");
  const chatTextBox = document.querySelector(".chat-text-box");
  const chatTextMobile = document.querySelector(".chat-text-mobile");
  const chatTextClose = document.querySelector(".chat-text-close > a > img");

  function handleResize() {
    if (window.innerWidth <= 500) {
      chatTextBox.style.display = "none";
      chatTextMobile.style.display = localStorage.getItem("chatClosed") === "true" ? "none" : "block";
    } else {
      chatTextBox.style.display = localStorage.getItem("chatClosed") === "true" ? "none" : "block";
      chatTextMobile.style.display = "none";
    }
  }

  // 초기 로드 시 한 번 실행하여 상태를 설정
  document.addEventListener("DOMContentLoaded", function () {
    handleResize();
    if (localStorage.getItem("chatClosed") === "true") {
      chatTextBox.style.display = "none";
      chatTextMobile.style.display = "none";
    }
  });

  // 윈도우 리사이즈 이벤트 리스너 추가
  window.addEventListener("resize", handleResize);

  chatBtn.addEventListener("click", function () {
    if (window.innerWidth <= 500) {
      // chatTextMobile의 display 속성을 토글하여 나타내거나 숨김
      if (chatTextMobile.style.display === "none" || chatTextMobile.style.display === "") {
        chatTextMobile.style.display = "block";
        localStorage.setItem("chatClosed", "false");
      } else {
        chatTextMobile.style.display = "none";
        localStorage.setItem("chatClosed", "true");
      }
    } else {
      // chatTextBox의 display 속성을 토글하여 나타내거나 숨김
      if (chatTextBox.style.display === "none" || chatTextBox.style.display === "") {
        chatTextBox.style.display = "block";
        localStorage.setItem("chatClosed", "false");
      } else {
        chatTextBox.style.display = "none";
        localStorage.setItem("chatClosed", "true");
      }
    }
  });

  // 닫기 버튼 클릭 이벤트
  chatTextClose.addEventListener("click", function () {
    chatTextBox.style.display = "none";
    chatTextMobile.style.display = "none";
    localStorage.setItem("chatClosed", "true"); // 로컬 스토리지에 상태 저장
  });
  // // ====== chat 버튼 모바일 닫기
  // const chatTextClose = document.querySelector('.chat-text-close > a > img');
  // chatTextClose.addEventListener('click', function () {
  //     chatTextMobile.style.display = 'none';
  // });

  // })

  // //===== 햄버거 메뉴
  // let ham = document.querySelector(".ham-menu");
  // let btMenu = document.querySelector(".header-mid-left a");
  // let hamClose = document.querySelector(".ham-close");

  // btMenu.addEventListener("click", () => {
  //   ham.classList.add("nav-active");
  // });

  // hamClose.addEventListener("click", () => {
  //   ham.classList.remove("nav-active");
  // });

  // // nav 영역에서 벗어나면 메뉴가 사라지는 기능
  // ham.addEventListener("mouseleave", () => {
  //   ham.classList.remove("nav-active");
  // });

  // 마우스 호버했을때
  let ham = document.querySelector(".ham-menu");
  let btMenu = document.querySelector(".header-mid-left a");
  let hamClose = document.querySelector(".ham-close");

  btMenu.addEventListener("click", () => {
    ham.style.display = "block";
  });

  hamClose.addEventListener("click", () => {
    ham.style.display = "none";
  });

  // ===== 스크롤 할 때, nav 상단 고정
  window.addEventListener("scroll", function () {
    var nav = document.querySelector(".nav");
    var header = document.querySelector(".header");
    var inner = document.querySelector(".inner");
    var headerHeight = header.offsetHeight;
    // var depth1 = document.querySelector('.depth1');

    if (window.pageYOffset >= headerHeight) {
      nav.style.position = "fixed";
      nav.style.top = "0px";
      // nav.style.width = '100%'; // 너비를 100%로 설정
      inner.classList.add("scrolled"); // 클래스 추가
      // depth1.style.forEach(function (item) {
      //     item.style.paddingTop = '20px'; // padding-top 설정
      // });
    } else {
      nav.style.position = "relative";
      nav.style.top = "0px";
      // nav.style.width = ''; // 초기화하여 부모 요소에 따라 너비가 결정되도록 함
      inner.classList.remove("scrolled"); // 클래스 제거
      // depth1.style.forEach(function (item) {
      //     item.style.paddingTop = '15px'; // padding-top 설정
      // });
    }
    inner.classList.add("inner"); // .inner 클래스 추가
  });

  document.querySelector(".gnb").addEventListener("mouseenter", function () {
    if (window.innerWidth > 720) {
      // 브라우저 크기가 720 이상일 때만 실행
      const depth2 = document.querySelectorAll(".depth2");
      const navBg = document.querySelector(".nav-bg");
      depth2.forEach(function (depth2) {
        depth2.style.display = "block";
      });
      navBg.style.display = "block";
    }
  });

  document.querySelector(".gnb").addEventListener("mouseleave", function () {
    if (window.innerWidth > 720) {
      // 브라우저 크기가 720 이상일 때만 실행
      const depth2 = document.querySelectorAll(".depth2");
      const navBg = document.querySelector(".nav-bg");
      depth2.forEach(function (depth2) {
        depth2.style.display = "none";
      });
      navBg.style.display = "none";
    }
  });

  //===== nav 마우스 오버, 마우스아웃 효과
  document.querySelector(".gnb").addEventListener("mouseenter", function () {
    // 모든 .depth2-wrap을 보이게 함
    const depth2 = document.querySelectorAll(".depth2");
    const navBg = document.querySelector(".nav-bg");
    depth2.forEach(function (depth2) {
      depth2.style.display = "block";
    });
    navBg.style.display = "block";
  });
  document.querySelector(".gnb").addEventListener("mouseleave", function () {
    // 모든 .depth2-wrap을 감춤
    const depth2 = document.querySelectorAll(".depth2");
    const navBg = document.querySelector(".nav-bg");
    depth2.forEach(function (depth2) {
      depth2.style.display = "none";
    });
    navBg.style.display = "none";
  });

  // ===== top-banner 닫기
  var topBanner = document.querySelector(".top-banner");
  var topBannerClose = document.querySelector(".top-banner-close");

  topBannerClose.addEventListener("click", function (event) {
    if (topBanner.style.display === "none" || topBanner.style.display === "") {
      topBanner.style.display = "none";
    } else {
      topBanner.style.display = "block";
    }
  });

  // ===== 모달창 닫기
  const modalClose = document.getElementById("modalClose");
  const allClose = document.getElementById("modalWrap");

  modalClose.addEventListener("click", function () {
    // #modalWrap의 스타일 초기화하여 세로 스크롤을 허용
    allClose.style.overflow = "visible";
    // 모달창을 숨김
    allClose.style.display = "none";
  });

  // 모달창 '오늘 하루 보지 않기' 클릭
  document.getElementById("modalToday").addEventListener("click", function () {
    // 현재 날짜와 시간을 기록
    const currentDate = new Date().toLocaleString();
    // sessionStorage에 'hideModal'을 현재 날짜와 시간으로 저장
    sessionStorage.setItem("hideModal", JSON.stringify({ value: true, datetime: currentDate }));

    // 모달창을 숨김
    allClose.style.display = "none";
  });

  // 페이지 로드 시 모달 상태 확인
  window.onload = function () {
    const storedData = JSON.parse(sessionStorage.getItem("hideModal"));

    if (storedData && storedData.value) {
      // 현재 시간과 저장된 시간 차이를 계산 (밀리초 단위)
      const timeDifference = new Date().getTime() - new Date(storedData.datetime).getTime();
      // 24시간(밀리초 기준)가 지났거나, 새로고침을 했을 경우
      if (timeDifference >= 24 * 60 * 60 * 1000 || (window.performance && window.performance.navigation.type === 1)) {
        sessionStorage.removeItem("hideModal");
      }
    }
  };

  // 안내창 스크립트
  const body = document.querySelector("body");

  // isOpen 값에 따라 스크롤을 제어하는 함수
  function controlScroll(isOpen) {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }

  // 초기 모달 상태 설정
  const isOpen = true;
  controlScroll(isOpen);

  allClose.addEventListener("click", function () {
    allClose.style.display = "none";

    // 모달이 닫힐 때는 스크롤을 다시 활성화
    controlScroll(false);
  });

  // ====== visual swiper적용
  const swiper = new Swiper(".sw-visual", {
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 900,
    autoplay: {
      delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
    centeredSlides: true, // 추가
    // slidesPerView: "auto", // 추가
  });

  // ====== test swiper적용
  const testSwiper = new Swiper(".sw-test", {
    loop: false,
    // speed: 900,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".sw-test-next",
      prevEl: ".sw-test-prev",
    },
    disableOnInteraction: true,
    breakpoints: {
      // 760이상 슬라이드 4개 보이기, 간격 20
      760: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 3.8,
        spaceBetween: 15,
      },
      650: {
        slidesPerView: 3.3,
        spaceBetween: 14,
      },
      570: {
        slidesPerView: 3.2,
        spaceBetween: 12,
      },
      450: {
        slidesPerView: 2.3,
        spaceBetween: 12,
      },
      420: {
        slidesPerView: 2.1,
        spaceBetween: 12,
      },

      380: {
        slidesPerView: 1.9,
        spaceBetween: 12,
      },
      320: {
        slidesPerView: 1.3,
        spaceBetween: 11,
      },
    },
  });

  // ====== bset swiper적용
  const bestSwiper = new Swiper(".sw-best", {
    loop: false,
    // speed: 900,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".sw-best-next",
      prevEl: ".sw-best-prev",
    },

    disableOnInteraction: true,
    breakpoints: {
      // 760이상 슬라이드 4개 보이기, 간격 20
      760: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 3.8,
        spaceBetween: 15,
      },
      650: {
        slidesPerView: 3.3,
        spaceBetween: 14,
      },
      570: {
        slidesPerView: 3.2,
        spaceBetween: 12,
      },
      450: {
        slidesPerView: 2.3,
        spaceBetween: 12,
      },
      420: {
        slidesPerView: 2.1,
        spaceBetween: 12,
      },

      380: {
        slidesPerView: 1.9,
        spaceBetween: 12,
      },
      320: {
        slidesPerView: 1.3,
        spaceBetween: 11,
      },
    },
  });

  // ======= review swiper적용
  const reviewSwiper = new Swiper(".review-inner", {
    // loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 900,
    // autoplay: {
    //   delay: 2500,
    //   // 사용자가 마우스 클릭 드래그로 이동하면
    //   // 아래 구문이 없으면 autoplya 가 해제되므로
    //   // 이것을 방지해 주기위한 처리
    //   disableOnInteraction: false,
    // },
    disableOnInteraction: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      440: {
        slidesPerView: 1.5,
      },
      540: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2.5,
      },
      740: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".sw-review-next",
      prevEl: ".sw-review-prev",
    },
    // centeredSlides: true, // 추가
    slidesPerView: "auto", // 추가
  });
});
