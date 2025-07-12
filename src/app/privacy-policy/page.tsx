import Head from 'next/head'; // Dùng cho Pages Router, nếu dùng App Router thì có thể bỏ Head nếu bạn dùng layout.tsx để quản lý meta data

export default function PolicyPage() {
    // Cập nhật ngày này mỗi khi bạn thay đổi chính sách
    const lastUpdated = "July 11, 2025";

    return (
        <>
            {/* Phần Head để tối ưu SEO cho trang này */}
            <Head>
                <title>Privacy Policy - Brain Game Evolution</title>
                <meta name="description" content="Privacy Policy for Brain Game Evolution games and applications by Brain Game Evolution." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://yourdomain.com/policy" /> {/* Thay yourdomain.com bằng domain thật của bạn */}
            </Head>

            {/* Container chính cho nội dung chính sách */}
            {/* Bạn có thể tùy chỉnh style này bằng CSS Modules, Tailwind CSS, hoặc CSS thông thường */}
            <div style={{
                maxWidth: '800px',
                margin: 'auto',
                padding: '20px',
                fontFamily: 'sans-serif',
                lineHeight: '1.6'
            }}>
                <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5em', color: '#FFFCFB' }}>
                    Privacy Policy
                </h1>

                <p style={{ marginBottom: '15px', color: '#F7F7F7' }}>
                    This Privacy Policy applies to all games and applications by{" "}
                    <strong>Brain Game Evolution</strong>, as well as all related services.
                </p>

                {/* --- 1. Data We Collect --- */}
                <h2 style={{ fontSize: '1.8em', marginBottom: '15px', marginTop: '30px', color: '#FFFCFB' }}>
                    1. Data We Collect
                </h2>
                <p style={{ marginBottom: '15px', color: '#F7F7F7' }}>
                    We use technologies like <strong>cookies</strong> (small files stored by your browser),{" "}
                    <strong>web beacons</strong>, or <strong>unique device identifiers</strong> to anonymously
                    identify your computer or device so we can deliver a better experience. Our systems also
                    automatically log information like your browser, operating system, and IP address.
                </p>
                <p style={{ marginBottom: '15px', color: '#F7F7F7' }}>
                    We may also collect <strong>personally identifiable information</strong> that you provide
                    to us, such as your name, address, phone number, or email address. With your permission,
                    we may also access other personal information on your device, such as your phone book,
                    calendar, or messages, in order to provide services to you. If authorized by you, we may
                    also access profile and other information from social network services like Facebook.
                </p>
                <p style={{ marginBottom: '15px', color: '#F7F7F7' }}>
                    Our systems are not designed to associate personal information with your activities (such
                    as the pages you view or things you click on or search for).
                </p>
                <p style={{ marginBottom: '30px', color: '#F7F7F7' }}>
                    We do not knowingly contact or collect personal information from children under 13. If you
                    believe we have inadvertently collected such information, please contact us so we can
                    promptly obtain parental consent or remove the information.
                </p>

                {/* --- 2. Sharing Data --- */}
                <h2 style={{ fontSize: '1.8em', marginBottom: '15px', marginTop: '30px', color: '#FFFCFB' }}>
                    2. Sharing Data
                </h2>
                <p style={{ marginBottom: '30px', color: '#F7F7F7' }}>
                    We <strong>generally do not share personally identifiable information</strong> (such as
                    name, address, email, or phone) with other companies unless approved by you.
                </p>

                {/* --- 3. Ad Tracking --- */}
                <h2 style={{ fontSize: '1.8em', marginBottom: '15px', marginTop: '30px', color: '#FFFCFB' }}>
                    3. Ad Tracking
                </h2>
                <p style={{ marginBottom: '15px', color: '#F7F7F7' }}>
                    Ad companies may use and collect anonymous data about your interests to customize content
                    and advertising here and in other sites and applications. Interest and location data may
                    be linked to your device but is <strong>not linked to your identity</strong>. Click to see
                    company privacy policies and opt-out choices:
                </p>
                <ul style={{ marginBottom: '30px', paddingLeft: '20px', color: '#F7F7F7' }}>
                    <li style={{ marginBottom: '5px' }}>
                        Google:{" "}
                        <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                            https://www.google.com/intl/en/policies/privacy/
                        </a>
                    </li>
                    <li>
                        Facebook:{" "}
                        <a href="https://www.facebook.com/policies" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                            https://www.facebook.com/policies
                        </a>
                    </li>
                </ul>

                {/* --- 4. Vendors --- */}
                <h2 style={{ fontSize: '1.8em', marginBottom: '15px', marginTop: '30px', color: '#FFFCFB' }}>
                    4. Vendors
                </h2>
                <p style={{ marginBottom: '15px', color: '#F7F7F7' }}>
                    Analytics companies may access anonymous data (such as your IP address or device ID) to
                    help us understand how our services are used. They use this data solely on our behalf.
                    They do not share it except in aggregate form; <strong>no data is shared as to any
                        individual user</strong>. Please click to see the privacy policies of the companies that
                    govern their use of data.
                </p>
                <p style={{ marginBottom: '30px', color: '#F7F7F7' }}>
                    {/* Bạn có thể thêm các liên kết đến chính sách quyền riêng tư của các nhà cung cấp phân tích khác tại đây nếu có, ví dụ: Unity Analytics, Firebase Analytics */}
                    * (Add links to other analytics vendors here if applicable, e.g., Unity Analytics, Firebase Analytics policy)
                </p>

                {/* --- 5. Security --- */}
                <h2 style={{ fontSize: '1.8em', marginBottom: '15px', marginTop: '30px', color: '#FFFCFB' }}>
                    5. Security
                </h2>
                <p style={{ marginBottom: '15px', color: '#F7F7F7' }}>
                    We take reasonable steps to secure your personally identifiable information against
                    unauthorized access or disclosure. We encrypt transmission of data on pages where you
                    provide payment information. However, no security or encryption method can be guaranteed
                    to protect information from hackers or human error.
                </p>
                <p style={{ marginBottom: '30px', color: '#F7F7F7' }}>
                    Information we collect may be stored or processed on computers located in any country
                    where we do business.
                </p>

                {/* --- 6. Location --- */}
                <h2 style={{ fontSize: '1.8em', marginBottom: '15px', marginTop: '30px', color: '#FFFCFB' }}>
                    6. Location
                </h2>
                <p style={{ marginBottom: '30px', color: '#F7F7F7' }}>
                    To customize our services for you, we and our partners may collect, use, and share precise
                    location data, including the real-time geographic location of your computer or device. This
                    location data is collected anonymously in a form that does not personally identify you and
                    is used only to provide and improve our service. We may obtain your consent on your first
                    use of the service.
                </p>

                {/* --- 7. Special Circumstances --- */}
                <h2 style={{ fontSize: '1.8em', marginBottom: '15px', marginTop: '30px', color: '#FFFCFB' }}>
                    7. Special Circumstances
                </h2>
                <p style={{ marginBottom: '30px', color: '#F7F7F7' }}>
                    To operate the service, we also may make identifiable and anonymous information available
                    to third parties in these limited circumstances: (1) with your express consent, (2) when we
                    have a good faith belief it is required by law, (3) when we have a good faith belief it is
                    necessary to protect our rights or property, or (4) to any successor or purchaser in a merger,
                    acquisition, liquidation, dissolution, or sale of assets. Your consent will not be required
                    for disclosure in these cases, but we will attempt to notify you, to the extent permitted by
                    law to do so.
                </p>

                {/* --- 8. Policy Changes --- */}
                <h2 style={{ fontSize: '1.8em', marginBottom: '15px', marginTop: '30px', color: '#FFFCFB' }}>
                    8. Policy Changes
                </h2>
                <p style={{ marginBottom: '15px', color: '#F7F7F7' }}>
                    Our privacy policy may change from time to time. When it does, we will revise the &#34;last updated&#34;
                    date at the bottom of the privacy statement. We will obtain your opt-in consent for any updates
                    to this Privacy Policy that materially expand the sharing or use of your personal information
                    in ways not disclosed in this Privacy Policy at the time of collection.
                </p>
                <p style={{ marginBottom: '30px', color: '#F7F7F7', fontStyle: 'italic' }}>
                    Last Updated: {lastUpdated}
                </p>

                {/* --- 9. Contact --- */}
                <h2 style={{ fontSize: '1.8em', marginBottom: '15px', marginTop: '30px', color: '#FFFCFB' }}>
                    9. Contact
                </h2>
                <p style={{ marginBottom: '15px', color: '#F7F7F7' }}>
                    If you have any questions or concerns about our privacy policies, please contact us:
                </p>
                <p style={{ marginBottom: '5px', color: '#F7F7F7' }}>
                    Email:{" "}
                    <a href="mailto:support@bge.com" style={{ color: '#007bff', textDecoration: 'none' }}>
                        support@bge.vercel.com
                    </a>{" "}
                    (Or your specific support email address)
                </p>
                <p style={{ marginBottom: '30px', color: '#F7F7F7' }}>
                    Address: Brain Game Evolution - Phuoc Long, Phu Quoi, Vinh Long, Vietnam
                </p>
            </div>
        </>
    );
};
