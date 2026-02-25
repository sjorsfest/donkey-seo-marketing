import type { Route } from "./+types/privacy-policy";
import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy — Donkey SEO" },
    {
      name: "description",
      content:
        "Privacy Policy for Donkey SEO — Learn how we collect, use, and protect your data.",
    },
  ];
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="section-container py-20">
        <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
          <h1 className="font-display">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">
            Last updated: 25 February 2026
          </p>

          <h2>1. Introduction</h2>
          <p>
            Donkey SEO ("we", "our", or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our AI-powered SEO
            content pipeline service. This policy complies with the General Data
            Protection Regulation (GDPR) and other applicable European data
            protection laws.
          </p>

          <h2>2. Data Controller</h2>
          <p>
            Donkey SEO acts as the data controller for personal data collected
            through our website and service. For data processed on behalf of our
            customers (e.g. content generated for their websites), we act as a
            data processor.
          </p>

          <h2>3. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Account Information:</strong> Email address, name, and
              password when you register
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              Service, including pages visited, features used, and content
              generated
            </li>
            <li>
              <strong>Website Data:</strong> Information you provide about your
              website, brand, and SEO preferences to enable content generation
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information, and cookies
            </li>
            <li>
              <strong>Payment Information:</strong> Billing details processed
              securely through our payment provider
            </li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>
            We process your personal data based on the following legal grounds:
          </p>
          <ul>
            <li>
              <strong>Contract:</strong> To provide and maintain our Service as
              per our agreement with you
            </li>
            <li>
              <strong>Consent:</strong> Where you have given explicit consent for
              specific processing activities
            </li>
            <li>
              <strong>Legitimate Interests:</strong> To improve our Service and
              ensure security
            </li>
            <li>
              <strong>Legal Obligation:</strong> To comply with applicable laws
              and regulations
            </li>
          </ul>

          <h2>5. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, operate, and maintain our Service</li>
            <li>
              Generate SEO content tailored to your brand and website
            </li>
            <li>Process transactions and send related information</li>
            <li>
              Send administrative information, updates, and support messages
            </li>
            <li>Respond to your comments, questions, and requests</li>
            <li>
              Monitor and analyse usage patterns to improve our Service
            </li>
            <li>Detect, prevent, and address technical issues and fraud</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil
            the purposes for which it was collected, including to satisfy legal,
            accounting, or reporting requirements. When data is no longer needed,
            it will be securely deleted or anonymised.
          </p>

          <h2>7. Data Sharing and Transfers</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third parties who assist in
              operating our Service (hosting, payment processing, AI providers)
            </li>
            <li>
              <strong>CMS Integrations:</strong> Content management systems you
              connect for article delivery, as authorised by you
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights
            </li>
          </ul>
          <p>
            If we transfer data outside the European Economic Area (EEA), we
            ensure appropriate safeguards are in place, such as Standard
            Contractual Clauses or adequacy decisions.
          </p>

          <h2>8. Your Rights Under GDPR</h2>
          <p>As a data subject, you have the following rights:</p>
          <ul>
            <li>
              <strong>Right of Access:</strong> Request a copy of the personal
              data we hold about you
            </li>
            <li>
              <strong>Right to Rectification:</strong> Request correction of
              inaccurate or incomplete data
            </li>
            <li>
              <strong>Right to Erasure:</strong> Request deletion of your
              personal data ("right to be forgotten")
            </li>
            <li>
              <strong>Right to Restriction:</strong> Request limitation of
              processing of your data
            </li>
            <li>
              <strong>Right to Data Portability:</strong> Receive your data in a
              structured, commonly used format
            </li>
            <li>
              <strong>Right to Object:</strong> Object to processing based on
              legitimate interests
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> Withdraw consent at any
              time where processing is based on consent
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at the email
            address below. We will respond to your request within 30 days.
          </p>

          <h2>9. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience. Essential cookies are necessary for the Service to
            function. Analytics cookies help us understand how visitors use our
            site. You can manage cookie preferences through your browser
            settings.
          </p>

          <h2>10. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal data against unauthorised access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the Internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>11. Children's Privacy</h2>
          <p>
            Our Service is not directed to individuals under the age of 16. We
            do not knowingly collect personal data from children. If you become
            aware that a child has provided us with personal data, please contact
            us.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page and
            updating the "Last updated" date. We encourage you to review this
            policy periodically.
          </p>

          <h2>13. Supervisory Authority</h2>
          <p>
            If you are located in the European Economic Area and believe we have
            not adequately addressed your concerns, you have the right to lodge a
            complaint with your local data protection supervisory authority.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us at{" "}
            <a href="mailto:support@donkeyseo.com">support@donkeyseo.com</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
