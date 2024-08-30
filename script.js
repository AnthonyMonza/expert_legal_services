/* // script.js

import React from 'react';
import ReactDOM from 'react-dom'; */
import styled from 'styled-components';

// ... (previous styled components remain the same)

const About = styled.div`
  margin-top: 2rem;
`;

const Title2 = styled.h2`
  color: #003147;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const ProfileText = styled.p`
  color: #333;
  line-height: 1.5;
`;

const ExperienceBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;

const YearCompany = styled.div`
  min-width: 150px;
`;

const YearCompanyText = styled.h5`
  text-transform: uppercase;
  color: #848c90;
  font-weight: 600;
`;

const JobDetails = styled.div`
  margin-left: 10px;
`;

const JobTitle = styled.h4`
  text-transform: uppercase;
  color: #2a7da2;
  font-size: 16px;
`;

const JobDescription = styled.p`
  color: #333;
`;

const Skills = styled.div`
  margin-top: 2rem;
`;

const SkillBox = styled.div`
  margin: 10px 0;
`;

const SkillName = styled.h4`
  text-transform: uppercase;
  color: #848c90;
  font-weight: 600;
`;

const SkillPercent = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  background: #f0f0f0;
`;

const SkillLevel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #03a9f4;
`;

function App() {
  return (
    <AppContainer>
      {/* ... (previous header and hero sections remain the same) */}

      <Content>
        <About>
          <Title2>Profile</Title2>
          <ProfileText>
            Focused and disciplined litigation lawyer with over five years of experience in active legal practice in both the Eastern and Western commercial hubs of Nigeria. Adept in research and drafting of legal processes, and always ready to acquire new knowledge and adapt to changing circumstances. A communication specialist with the ability to establish and maintain relationships between the firm and its stakeholders, including employees and other partners, via written or vocal correspondences. Adept at carrying out activities at management's or other stakeholders' request while collaborating with counsel in chambers.
            <br /><br />
            Knowledgeable and experienced in various subject matter areas of law, which best promote the overall accuracy in handling intricate briefs. Committed to the Nigerian Bar Association and passionate about working to further enhance the jurisprudence of the law in activism and advocacy.
          </ProfileText>
        </About>

        <About>
          <Title2>Experience</Title2>
          <ExperienceBox>
            <YearCompany>
              <YearCompanyText>2024 - Present</YearCompanyText>
              <YearCompanyText>IVY CREST SOLICITORS</YearCompanyText>
            </YearCompany>
            <JobDetails>
              <JobTitle>Associate Counsel</JobTitle>
              <JobDescription>
                My responsibilities include conducting specialized legal research, drafting and negotiating complex contracts, ensuring regulatory compliance across multiple jurisdictions, and providing strategic legal advice on cross-border issues with a team of senior attorneys.
              </JobDescription>
            </JobDetails>
          </ExperienceBox>

          <ExperienceBox>
            <YearCompany>
              <YearCompanyText>2019 - Present</YearCompanyText>
              <YearCompanyText>SHATWON NGO</YearCompanyText>
            </YearCompany>
            <JobDetails>
              <JobTitle>Legal Advisor II</JobTitle>
              <JobDescription>
                Here I specialize in providing legal guidance on nonprofit governance, ensuring compliance with relevant laws and regulations, drafting and reviewing policies and agreements, and advising on issues related to advocacy, fundraising, and program implementation.
              </JobDescription>
            </JobDetails>
          </ExperienceBox>

          {/* ... (you can add more experience entries as needed) */}
        </About>

        <Skills>
          <Title2>Professional Skills</Title2>
          <SkillBox>
            <SkillName>Technical Proficiency</SkillName>
            <SkillPercent>
              <SkillLevel style={{ width: '90%' }} />
            </SkillPercent>
          </SkillBox>
          <SkillBox>
            <SkillName>Cybersecurity Awareness</SkillName>
            <SkillPercent>
              <SkillLevel style={{ width: '75%' }} />
            </SkillPercent>
          </SkillBox>
          <SkillBox>
            <SkillName>Effective Communication</SkillName>
            <SkillPercent>
              <SkillLevel style={{ width: '95%' }} />
            </SkillPercent>
          </SkillBox>
          {/* ... (you can add more skill entries as needed) */}
        </Skills>
      </Content>

      <Footer>
        <p>&copy; 2024 Modern Law Firm. All rights reserved.</p>
      </Footer>
    </AppContainer>
  );
}

document.getElementById('appointmentForm').
addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  fetch('/api/submit-appointment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
    if (result.success) {
      alert('Appointment booked succesfully! We will contact you shortly to confirm.');
      this.reset();
    } else {
      alert('There was an error booking your appointment. Please try again or contact us directly.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error booking your appointment. Please try again or contact us directly.');
  });
});

/* ReactDOM.render(<App />, document.getElementById('root'));
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('appointment-form');

  form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic form validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const service = document.getElementById('service').value;

      if (!name || !email || !phone || !date || !time || !service) {
          alert('Please fill in all required fields.');
          return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          return;
      }

      // If validation passes, you would typically send this data to a server
      // For now, we'll just log it to the console and show a success message
      console.log('Form submitted:', { name, email, phone, date, time, service });
      alert('Appointment request submitted successfully! We will contact you shortly to confirm.');

      // Reset the form
      form.reset();
  });
}); */
