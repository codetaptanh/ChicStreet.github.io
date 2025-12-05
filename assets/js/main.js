$(document).ready(function() {
    console.log("CHIC STREET Frontend is ready.");
    
    // =========================================================
    // 1. Logic Trang Chi Tiết Sản Phẩm (product-detail.html)
    // =========================================================

    // 1a. Tương tác Chọn ảnh Thumbnail
    // Khi click vào ảnh nhỏ, đổi ảnh chính
    $('.thumbnail').on('click', function() {
        // Lấy đường dẫn ảnh từ ảnh thumbnail được click
        var newImageSrc = $(this).attr('src');
        
        // Đổi ảnh chính (sử dụng jQuery selector)
        $('#main-product-img').attr('src', newImageSrc);

        // Đổi trạng thái 'active' (CSS)
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');
    });

    // 1b. Tương tác Chọn Màu Sắc
    $('.color-dot').on('click', function() {
        // Đổi trạng thái 'active'
        $('.color-dot').removeClass('active');
        $(this).addClass('active');
        
        // Báo hiệu tương tác thành công
        var selectedColor = $(this).data('color');
        console.log('Đã chọn Màu: ' + selectedColor);
    });

    // 1c. Tương tác Chọn Kích Cỡ
    $('.size-box').on('click', function() {
        // Đổi trạng thái 'active'
        $('.size-box').removeClass('active');
        $(this).addClass('active');
        
        // Báo hiệu tương tác thành công
        var selectedSize = $(this).data('size');
        console.log('Đã chọn Size: ' + selectedSize);
    });

    // =========================================================
    // 2. Logic Form Liên Hệ (contact.html)
    // =========================================================

    // Bắt sự kiện Gửi Form
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Ngăn chặn tải lại trang (mặc định của form)

        // Kiểm tra validation đơn giản (kiểm tra trường tên)
        var nameValue = $('#name').val();
        
        if (nameValue === "") {
            alert('LỖI: Vui lòng nhập Họ và Tên để chúng tôi liên hệ lại!');
        } else {
            // Hiển thị thông báo thành công
            alert('Yêu cầu của bạn đã được gửi thành công! Cảm ơn bạn, ' + nameValue + '.');
            // Reset Form sau khi gửi thành công
            this.reset();
        }
    });

    // =========================================================
    // 3. Logic Tương tác Mua Hàng/Giỏ Hàng (index.html, product-detail.html)
    // =========================================================
    
    // Bắt sự kiện Nút 'Thêm vào Giỏ hàng'
    $('.style-button:contains("THÊM VÀO GIỎ")').on('click', function() {
        // Chỉ cần báo hiệu tương tác thành công
        alert('Tương tác thành công! Đã mô phỏng thêm sản phẩm vào Giỏ hàng.');
    });
    
    // Bắt sự kiện Nút 'MUA NGAY'
    $('.style-button:contains("MUA NGAY")').on('click', function() {
        // Chỉ cần báo hiệu tương tác thành công
        alert('Tương tác thành công! Đã mô phỏng chuyển đến trang Thanh toán.');
    });

    // =========================================================
    // 4. Logic UI Chung
    // =========================================================

    // Ví dụ: Bắt sự kiện Modal Đăng nhập mở
    $('#loginModal').on('shown.bs.modal', function () {
      // Tự động focus vào trường Email khi modal mở
      $('#email').trigger('focus');
    });
});