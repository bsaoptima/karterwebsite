import React from "react";


export default function PrivacyPolicy(){
    return (
        <div className="flex bg-[#F6F9FC]">
            <div className="p-8 md:px-40 md:py-20 lg:px-60 flex flex-col justify-center items-center gap-y-10">
                <div className="min-h-screen py-8">
                    <div className="container mx-auto p-4">
                        <h1 className="text-3xl font-alliance font-semibold mb-8 text-[#00A6B2]">Privacy Policy</h1>
                        <p>Last Updated: [03/10/2023]</p>
                        
                        <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
                        <p>
                        Welcome to KarterManage ("the Service"), provided by Karter Labs Limited ("the Company"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our Service.
                        </p>
                        
                        {/* Include other sections in a similar format */}

                        <h2 className="text-2xl font-semibold mt-6">2. Information We Collect</h2>
                        <p>
                        a. <strong>Account Information:</strong> When you create an account on KarterManage, we may collect your name, email address, and TikTok account information.
                        </p>
                        <p>
                        b. <strong>Content:</strong> We collect the content you post through our Service to facilitate the posting process on TikTok.
                        </p>
                        <p>
                        c. <strong>Usage Information:</strong> We may collect information about how you use the Service, including your interactions, preferences, and device information.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">3. Use of Information</h2>
                        <p>We use the information we collect for the following purposes:</p>
                        <p>
                        a. To provide and maintain the Service.
                        </p>
                        <p>
                        b. To manage and post content on your TikTok accounts.
                        </p>
                        <p>
                        c. To improve and personalize your experience on the Service.
                        </p>
                        <p>
                        d. To communicate with you and respond to your inquiries.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">4. Sharing of Information</h2>
                        <p>We may share your information with third parties under the following circumstances:</p>
                        <p>
                        a. With your consent.
                        </p>
                        <p>
                        b. To comply with legal obligations.
                        </p>
                        <p>
                        c. To protect our rights, privacy, safety, or property.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">5. Data Security</h2>
                        <p>
                        We take reasonable measures to protect your personal information, but please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">6. Your choices</h2>
                        <p>You have the following choices regarding your information:</p>
                        <p>
                        a. You can access, update, or delete your account information.
                        </p>
                        <p>
                        b. You can opt out of receiving promotional communications from us.
                        </p>    

                        <h2 className="text-2xl font-semibold mt-6">7. Third-Party Links</h2>
                        <p>
                        Our Service may contain links to third-party websites or services that are not controlled or operated by us. We are not responsible for the content or privacy practices of such third-party sites.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">8. Children's Privacy</h2>
                        <p>
                        Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13 years of age.
                        </p>
                        
                        <h2 className="text-2xl font-semibold mt-6">9. Changes to this Privacy Policy</h2>
                        <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">10. Contact Information</h2>
                        <p>
                        If you have any questions or concerns about this Privacy Policy or your personal information, please contact us at <a href="mailto:communications@karter.dev" className="text-[#00A6B2]">communications@karter.dev</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}