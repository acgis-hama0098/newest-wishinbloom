
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const PolicyContent = {
    privacy: {
      title: "Privacy Policy",
      content: `
        At Occasions, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.

        Information We Collect:
        • Personal information you provide when creating an account
        • Order and payment information for purchases
        • Communication preferences and contact details
        • Website usage data and analytics

        How We Use Your Information:
        • To process and fulfill your orders
        • To provide customer support and communication
        • To improve our services and user experience
        • To send promotional materials (with your consent)

        Data Protection:
        We implement industry-standard security measures to protect your personal information. Your data is encrypted and stored securely.

        Contact Us:
        If you have questions about this Privacy Policy, please contact us at privacy@occasions.com.

        Last updated: ${new Date().toLocaleDateString()}
      `
    },
    terms: {
      title: "Terms of Service",
      content: `
        Welcome to Occasions. By using our services, you agree to these Terms of Service.

        Use of Services:
        • You must be at least 18 years old to use our services
        • You are responsible for maintaining account security
        • You agree to provide accurate information
        • You will not use our services for illegal activities

        Orders and Payments:
        • All orders are subject to acceptance and availability
        • Prices are subject to change without notice
        • Payment must be received before order processing
        • We reserve the right to cancel orders at our discretion

        Intellectual Property:
        • All content on our website is owned by Occasions
        • You may not reproduce or distribute our content without permission
        • User-generated content may be used by Occasions for promotional purposes

        Limitation of Liability:
        Occasions is not liable for indirect, incidental, or consequential damages arising from use of our services.

        Contact Us:
        For questions about these Terms, contact us at legal@occasions.com.

        Last updated: ${new Date().toLocaleDateString()}
      `
    },
    return: {
      title: "Return Policy",
      content: `
        At Occasions, we want you to be completely satisfied with your purchase. Our return policy is designed to ensure a smooth return process.

        Return Eligibility:
        • Items must be returned within 30 days of purchase
        • Items must be in original condition and packaging
        • Custom or personalized items cannot be returned
        • Sale items are final sale unless defective

        Return Process:
        1. Contact our customer service team
        2. Receive a return authorization number
        3. Package items securely with original packaging
        4. Ship using the provided return label

        Refunds:
        • Refunds will be processed within 5-7 business days
        • Original shipping costs are non-refundable
        • Return shipping costs are the customer's responsibility
        • Refunds will be issued to the original payment method

        Exchanges:
        • We offer exchanges for different sizes or colors
        • Exchange requests must be made within 30 days
        • Additional shipping charges may apply for exchanges

        Damaged Items:
        If you receive a damaged item, please contact us immediately with photos of the damage.

        Contact Us:
        For return questions, contact us at returns@occasions.com or call 1-800-OCCASIONS.

        Last updated: ${new Date().toLocaleDateString()}
      `
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Occasions</h3>
            <p>Celebrating life's special moments with you.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Policies</h4>
            <ul className="footer-links">
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="footer-link-button">Privacy Policy</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{PolicyContent.privacy.title}</DialogTitle>
                    </DialogHeader>
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {PolicyContent.privacy.content}
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="footer-link-button">Terms of Service</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{PolicyContent.terms.title}</DialogTitle>
                    </DialogHeader>
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {PolicyContent.terms.content}
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="footer-link-button">Return Policy</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{PolicyContent.return.title}</DialogTitle>
                    </DialogHeader>
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {PolicyContent.return.content}
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <p>Follow us for inspiration and updates</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Pinterest">📌</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Occasions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
