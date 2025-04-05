jQuery(document).ready(function ($) {
  const packSize = parseFloat($("#pack_size").contents().last().text().trim());
  const currentPack = $(".curpack");
  const area = $(".area");
  const numericValue = $("#pack_fee")
    .text()
    .match(/\d+.\d+/);
  const packFee = numericValue ? parseFloat(numericValue[0]) : 0;

  //   calculate packs count by user area needed
  $(area).on("input", function () {
    const areaVal = parseFloat($(this).val());
    if (!isNaN(areaVal) && areaVal > 0) {
      packCount = Math.ceil(areaVal / packSize);
    } else {
      packCount = 0;
    }
    currentPack.val(packCount); //update current pack
    updateTotalItems(packCount, packSize, packFee); //update final values placed above add to basket
  });

  // plus icons handling
  $(".incpack").on("click", function () {
    packCount = currentPack.val();
    packCount++;

    currentPack.val(packCount); //update current pack
    updateTotalItems(packCount, packSize, packFee); //update final values placed above add to basket
    $(area).val((packCount * packSize).toFixed(2)); //update area input
  });

  //minus icon handling
  $(".decpack").on("click", function () {
    packCount = currentPack.val();
    packCount > 1 ? packCount-- : 0; // The subtraction will continue until it reaches 1
    currentPack.val(packCount); //update current pack
    updateTotalItems(packCount, packSize, packFee); //update final values placed above add to basket
    $(area).val((packCount * packSize).toFixed(2)); //update area input
  });

  function updateTotalItems(packCount, packSize, packFee) {
    $(".curpack-text").text(packCount);
    $(".curpack-size").text((packCount * packSize).toFixed(2));
    $(".totalprice span").text((packCount * packFee).toFixed(2));
  }
});

// handling swiper slider
document.addEventListener("DOMContentLoaded", function () {
  var thumbsSwiper = new Swiper(".single-product-swiper__thumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var mainSwiper = new Swiper(".single-product-swiper__main", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
});
