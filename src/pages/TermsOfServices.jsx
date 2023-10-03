import React from "react";


export default function TermsOfServices(){
    return (
        <div className="flex bg-[#F6F9FC]">
            <div className="p-8 md:px-40 md:py-20 lg:px-60 flex flex-col justify-center items-center gap-y-10">
                <div className="min-h-screen py-8">
                    <div className="container mx-auto p-4">
                        <h1 className="text-3xl font-alliance font-semibold mb-8 text-[#00A6B2]">Terms of Service</h1>
                        <p>Last Updated: [03/10/2023]</p>
                        
                        <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
                        <p>
                        By using the Service, you represent that you are at least 18 years old
                        and have the legal capacity to enter into this agreement. If you are
                        using the Service on behalf of a company or organization, you represent
                        that you have the authority to bind them to these Terms.
                        </p>
                        
                        {/* Include other sections in a similar format */}

                        <h2 className="text-2xl font-semibold mt-6">2. Account Creation and Management</h2>
                        <p>
                        a. You agree to comply with TikTok's Terms of Service and Community Guidelines when using the Service.
                        </p>
                        <p>
                        b. KarterManage is an intermediary platform for managing TikTok accounts and content and is not affiliated with TikTok.
                        </p>
                        <p>
                        c. You are responsible for the security and confidentiality of your TikTok account credentials.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">3. Content Posting</h2>
                        <p>
                        a. You must adhere to TikTok's content guidelines and not post prohibited or restricted content through the Service.
                        </p>
                        <p>
                        b. KarterManage does not engage in any automatic posting or activity that violates TikTok's policies.
                        </p>
                        <p>
                        c. You are solely responsible for the content you post through the Service.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">4. Intellectual Property</h2>
                        <p>
                        a. You retain ownership of the content you post through the Service but grant KarterManage the necessary rights to facilitate the posting process.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">5. Prohibited Activities</h2>
                        <p>
                        a. You must not engage in activities that violate TikTok's policies or these Terms, including but not limited to spamming, hacking, or abusive behavior.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">6. Termination and Suspension</h2>
                        <p>
                        a. Karter Labs Limited reserves the right to suspend or terminate your access to the Service, especially in cases of repeated violations of TikTok's guidelines or these Terms.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">7. Disclaimers</h2>
                        <p>
                        a. The Service is provided "as is," and Karter Labs Limited does not guarantee uninterrupted or error-free operation.
                        </p>
                        <p>
                        b. TikTok's policies may change, and you are responsible for staying informed of and complying with any updates.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">8. Liability</h2>
                        <p>
                        a. Karter Labs Limited is not responsible for any content posted on TikTok or any actions taken by TikTok in response to your activity on the Service.
                        </p>
                        
                        <h2 className="text-2xl font-semibold mt-6">9. Governing Law</h2>
                        <p>
                        a. Any disputes or legal issues arising from these Terms shall be governed by and construed in accordance with the laws of the United Kingdom.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6">10. Contact Information</h2>
                        <p>
                        For questions, concerns, or support related to the Service, please
                        contact us at <a href="mailto:communications@karter.dev" className="text-[#00A6B2]">communications@karter.dev</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}