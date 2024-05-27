import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const License = () => {
    return (
        <div>
            <Navbar />
            <div className="policy-content flex flex-col px-72 py-20 bg-[#FFF9F6] mt-6 text-lg tracking-wide text-gray-500">
                <h1 className="font-bold text-5xl text-black">License</h1>
                <p className="py-2">Last updated: January 2022</p>
                <div className="leading-8">
                    Your content remains yours, which means that you retain any
                    intellectual property rights that you have in your content.
                    For example, you have intellectual property rights in the
                    creative content you make, such as reviews you write. Or you
                    may have the right to share someone else’s creative content
                    if they’ve given you their permission. We need your
                    permission if your intellectual property rights restrict our
                    use of your content. You provide Google with that permission
                    through this license.
                </div>

                <h1 className="font-bold text-xl text-black pt-20 pb-5">
                    What’s covered
                </h1>
                <div className="leading-8">
                    This license covers your content if that content is
                    protected by intellectual property rights.
                </div>

                <h1 className="font-bold text-xl text-black pt-20 pb-5">
                    What’s not covered
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
                    Price Updates
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
                    Refund Policy
                </h1>
                <div className="leading-8">
                    But why fast loading is important? According to Neil Patel,
                    47% of people on the internet expect a web page to load in
                    less than 2 seconds. Static websites are way faster than
                    dynamic ones. As they don’t have a back-end system, there is
                    no time loss due to database connection. Instead, the
                    lightweight, pre-rendered HTML files load incredibly fast.
                    You may not disclose any information about your order
                    including, but not limited to, Order ID, download
                    connection, etc.
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default License;
