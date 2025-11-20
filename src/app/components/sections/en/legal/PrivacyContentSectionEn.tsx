import React from 'react';
import LineSeparator from '../../../common/LineSeparator';

const PrivacyContentSectionEn: React.FC = () => {
  return (
    <section className="mobile-app-section py-[5rem] md:py-[8rem] bg-[rgba(0,255,212,0.11)] rounded-lg text-[#00313B] font-roboto" dir="ltr">
      {/* Green square between header and section */}
      <div className="mx-auto px-6 relative">
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <div
            className="hidden md:block absolute -top-[5rem] left-1/2 transform -translate-x-4/6 w-[1.5rem] h-[1.5rem] bg-[#00FF90] animate-float opacity-80">
          </div>

          <div className="space-y-6 relative">
            <h2 className="text-[33px] font-semibold leading-[43px]"> Information Collection</h2>
            <p className="text-[29px] font-normal leading-[43px]">We collect the following types of information:</p>
            <ul className="text-[29px] font-normal leading-[43px] list-disc pl-8">
              <li>Personal Information: Name, contact details, date of birth, medical history, etc.</li>
              <li>Usage Data: Information about how you interact with our platform.</li>
              <li>Payment Information: Details required to process payments.</li>
            </ul>

            {/* Separator */}
            <LineSeparator />

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8"> Use of Information</h2>
            <p className="text-[29px] font-normal leading-[43px]">Your information is used to:</p>
            <ul className="text-[29px] font-normal leading-[43px] list-disc pl-8">
              <li>Provide and improve our services.</li>
              <li>Process transactions and manage subscriptions.</li>
              <li>Communicate with you about updates and offers.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <LineSeparator />

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">Data Sharing</h2>
            <p className="text-[29px] font-normal leading-[43px]">We may share your information with:</p>
            <ul className="text-[29px] font-normal leading-[43px] list-disc pl-8">
              <li>Healthcare Providers: To facilitate medical services.</li>
              <li>Third-Party Service Providers: For payment processing and technical support.</li>
              <li>Legal Authorities: When required by law.</li>
            </ul>

            <LineSeparator />

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">Data Retention</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>

            <LineSeparator />

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">Data Security</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <LineSeparator />

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8"> User Rights</h2>
            <p className="text-[29px] font-normal leading-[43px]">You have the right to:</p>
            <ul className="text-[29px] font-normal leading-[43px] list-disc pl-8">
              <li>Access and correct your personal information.</li>
              <li>Request the deletion of your data.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <p className="text-[29px] font-normal leading-[43px]">
              To exercise these rights, please contact us at <a href="mailto:info@medyour.com" className="underline text-[#005071]">info@medyour.com</a>.
            </p>

            <LineSeparator />

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">Children&apos;s Privacy</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children.
            </p>

            <LineSeparator />

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8"> Changes to This Policy</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.
            </p>

            <LineSeparator />

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">Contact Us</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              If you have any questions or concerns about our Terms of Service or Privacy Policy, please contact us at:
            </p>
            <ul className="text-[29px] font-normal leading-[43px] list-disc pl-8 flex-col">
              <a href="mailto:info@medyour.com" className="block">Email: info@medyour.com</a>
              <a href="https://www.medyour.com" className="block">Website: www.medyour.com</a>
            </ul>

            <div className="hidden md:block absolute top-[2rem] -right-[5rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float opacity-80">
            </div>
            <div className="hidden md:block absolute top-1/2 -left-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float-delay opacity-60 blur-[2px]">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyContentSectionEn;
