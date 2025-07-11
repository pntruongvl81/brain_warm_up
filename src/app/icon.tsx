// app/favicon.ico/route.ts hoặc app/api/og/route.ts
import { ImageResponse } from 'next/og'; // Thêm dòng này

export const runtime = "edge"; // Tùy chọn, nếu bạn muốn chạy trên Edge Runtime

// Đối với favicon, kích thước thường là 32x32 hoặc 16x16
// Đối với OG Image, kích thước phổ biến là 1200x630
export const size = {
    width: 32,
    height: 32,
};

export const contentType = "image/png"; // Đặt kiểu nội dung cho hình ảnh

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    background: "black", // Màu nền
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    display: "flex", // Quan trọng để justify-content và align-items hoạt động
                    color: "yellow", // Màu chữ
                    // Bạn có thể thêm font-family nếu muốn
                }}
            >
                B
            </div>
        ),
        // Đối số thứ hai là một object chứa width, height và các tùy chọn khác
        {
            width: size.width,
            height: size.height,
            // Ví dụ thêm fonts nếu bạn muốn dùng font tùy chỉnh
            // fonts: [
            //   {
            //     name: 'Inter',
            //     data: fontData, // Dữ liệu font
            //     style: 'normal',
            //     weight: 400,
            //   },
            // ],
        }
    );
}