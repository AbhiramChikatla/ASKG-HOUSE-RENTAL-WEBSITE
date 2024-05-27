import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar />
            <div className="policy-content flex flex-col px-72 py-20 bg-[#FFF9F6] mt-6 text-lg tracking-wide text-gray-500">
                <h1 className="font-bold text-5xl text-black">
                    Privacy Policy
                </h1>
                <p className="py-2">Last updated: January 2022</p>
                <div className="leading-8">
                    Hi, welcome to our privacy policy which applies to our
                    customers. This policy sets out how if you are a ASKG.com
                    user or visitor to our site, we treat your personal
                    information. Last updated on March 01, 2022
                </div>

                <h1 className="font-bold text-xl text-black pt-20 pb-5">
                    1. The type of personal information we collect
                </h1>
                <div className="leading-8">
                    Hi, welcome to our privacy policy which applies to our
                    customers. This policy sets out how if you are a ASKG.com
                    user or visitor to our site, we treat your personal
                    information. Last updated on March 01, 2022
                </div>

                <h1 className="font-bold text-xl text-black pt-20 pb-5">
                    2. Cookies and web analytics
                </h1>
                <div className="leading-8">
                    We use cookies to recognize and monitor users, their on-site
                    behavior, and their preferences for accessing their website.
                    These cookies include the IP and time of visits by visitors.
                    Visitors to Relasto that do not want cookies put on their
                    browsers should configure their browsers to reject cookies
                    before using the Relasto website.
                </div>

                <h1 className="font-bold text-xl text-black pt-20 pb-5">
                    3. When do we need to update this policy?
                </h1>
                <div className="leading-8">
                    We will need to update this policy from time to time to
                    ensure that it remains up-to-date with the latest legal
                    requirements and any improvements to our privacy management
                    practices. When we change the policy, we will make sure that
                    we inform you, if any, of such changes. A copy of this
                    policy’s latest version will always be available at this
                    page.
                </div>

                <h1 className="font-bold text-xl text-black pt-20 pb-5">
                    4. Registration
                </h1>
                <div className="leading-8">
                    To use our Service you will need to create an account and
                    complete the registration process at
                    https://Relasto.com/signup (Registration).
                </div>
                <div className="leading-8">
                    At Registration, you will select logon credentials for each
                    user of the Service, which may be an employee of the
                    Subscriber or other individuals authorised by the Subscriber
                    to use the Service (Authorised User). Logon details should
                    only be used by the Authorised User to whom they are
                    assigned and cannot be shared with any third parties
                    (including another Authorised User). You are solely
                    responsible for the confidentiality and use of all logon
                    details for your account and those assigned to Authorised
                    Users, as well as for any use or misuse of the Service using
                    Subscriber’s or any Authorised Users’ logon details. You
                    shall notify us immediately if you become aware of any loss,
                    theft or unauthorised use of any logon details, and we
                    reserve the right to delete or change them at any time and
                    for any reason.
                </div>
                <div className="leading-8">
                    You warrant and represent to us that the details you provide
                    to us during Registration are accurate, complete and
                    up-to-date. We will hold and treat such information in
                    accordance with the terms of our Privacy Policy. If you or
                    your Participants use a mobile telephone to access our
                    Service, we may need to send SMS messages. You may opt out
                    of this service by replying STOP to the SMS message or by
                    contacting us at support@Relasto.com.
                </div>



                <h1 className="font-bold text-xl text-black pt-20 pb-5">
                5. Marketing Choices regarding your personal data                </h1>
                <div className="leading-8">
                Where we have your permission to do so (e.g. if you subscribed to one of our email lists or indicated that you are interested in receiving deals or information from us), we will send you email marketing messages about products and services which we feel may be of interest to you. You can ‘opt-out’ of such communications if you would prefer not to receive them in the future by using the “unsubscribe” facility provided in the communication itself.
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
