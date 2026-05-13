import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  PawPrint,
  Heart,
  Shield,
  Users,
  Globe,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import { theme } from "../styles/theme";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  min-height: 100vh;
  padding-top: 64px;
  animation: ${fadeIn} 0.4s ease;
`;

const Hero = styled.section`
  background: linear-gradient(
    160deg,
    ${theme.colors.neutral900} 0%,
    ${theme.colors.neutral700} 100%
  );
  color: white;
  padding: 100px ${theme.spacing[6]} 80px;
  text-align: center;
`;

const HeroInner = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const HeroEyebrow = styled.p`
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.primary400};
  margin-bottom: ${theme.spacing[4]};
`;

const HeroTitle = styled.h1`
  font-size: ${theme.typography.sizes["5xl"]};
  font-weight: ${theme.typography.weights.semibold};
  line-height: ${theme.typography.lineHeights.tight};
  letter-spacing: -0.02em;
  margin-bottom: ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes["3xl"]};
  }
`;

const HeroText = styled.p`
  font-size: ${theme.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.7);
  line-height: ${theme.typography.lineHeights.relaxed};
`;

const Section = styled.section<{ $bg?: string }>`
  background: ${({ $bg }) => $bg || "white"};
  padding: ${theme.spacing[20]} ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[12]} ${theme.spacing[4]};
  }
`;

const SectionInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  text-align: center;
  font-size: ${theme.typography.sizes.xs};
  font-weight: ${theme.typography.weights.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.primary600};
  margin-bottom: ${theme.spacing[3]};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${theme.typography.sizes["3xl"]};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.neutral900};
  letter-spacing: -0.02em;
  margin-bottom: ${theme.spacing[4]};
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: ${theme.typography.sizes.base};
  color: ${theme.colors.neutral500};
  max-width: 560px;
  margin: 0 auto ${theme.spacing[12]};
  line-height: ${theme.typography.lineHeights.relaxed};
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[8]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  text-align: center;
  padding: ${theme.spacing[8]} ${theme.spacing[6]};
  border-radius: ${theme.radii["2xl"]};
  background: ${theme.colors.neutral50};
  border: 1px solid ${theme.colors.neutral100};
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
    background: white;
  }
`;

const CardIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${theme.radii.xl};
  background: ${theme.colors.primary50};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing[5]};
  color: ${theme.colors.primary600};
`;

const CardTitle = styled.h3`
  font-size: ${theme.typography.sizes.lg};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.neutral900};
  margin-bottom: ${theme.spacing[3]};
`;

const CardText = styled.p`
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.neutral500};
  line-height: ${theme.typography.lineHeights.relaxed};
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing[6]};
  margin-top: ${theme.spacing[12]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing[4]};
  }
`;

const StatBox = styled.div`
  text-align: center;
  padding: ${theme.spacing[6]};
  background: white;
  border-radius: ${theme.radii.xl};
  border: 1px solid ${theme.colors.neutral100};
  box-shadow: ${theme.shadows.sm};
`;

const StatNum = styled.div`
  font-size: ${theme.typography.sizes["4xl"]};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.primary600};
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: ${theme.spacing[2]};
`;

const StatDesc = styled.div`
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.neutral500};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TeamCard = styled.div`
  text-align: center;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto ${theme.spacing[3]};
  border: 3px solid ${theme.colors.neutral100};
`;

const TeamName = styled.div`
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.neutral900};
  font-size: ${theme.typography.sizes.sm};
`;

const TeamRole = styled.div`
  font-size: ${theme.typography.sizes.xs};
  color: ${theme.colors.neutral500};
  margin-top: 2px;
`;

const CTA = styled.section`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary700},
    ${theme.colors.primary500}
  );
  color: white;
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: ${theme.typography.sizes["4xl"]};
  font-weight: ${theme.typography.weights.semibold};
  letter-spacing: -0.02em;
  margin-bottom: ${theme.spacing[4]};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes["3xl"]};
  }
`;

const CTAText = styled.p`
  font-size: ${theme.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: ${theme.spacing[8]};
`;

const CTABtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[4]} ${theme.spacing[8]};
  background: white;
  color: ${theme.colors.primary700};
  border-radius: ${theme.radii.xl};
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.semibold};
  transition: all ${theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Marcus Rivera",
    role: "Head of Operations",
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Priya Patel",
    role: "Lead Developer",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "James Okafor",
    role: "Animal Welfare Lead",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export function AboutPage() {
  return (
    <Page>
      <Hero>
        <HeroInner>
          <HeroEyebrow>About PetGallery</HeroEyebrow>
          <HeroTitle>
            Every pet deserves a<br /> loving home
          </HeroTitle>
          <HeroText>
            We're on a mission to connect amazing animals with equally amazing
            families. Our platform makes pet adoption transparent, joyful, and
            accessible to everyone.
          </HeroText>
        </HeroInner>
      </Hero>

      <Section>
        <SectionInner>
          <SectionLabel>Our Mission</SectionLabel>
          <SectionTitle>Why we do what we do</SectionTitle>
          <SectionSubtitle>
            Millions of pets are waiting for their forever homes. We built
            PetGallery to make the discovery process delightful.
          </SectionSubtitle>
          <MissionGrid>
            <MissionCard>
              <CardIcon>
                <Heart size={28} />
              </CardIcon>
              <CardTitle>Compassion First</CardTitle>
              <CardText>
                Every decision we make starts with the well-being of the animals
                in our care. We partner only with shelters who share our values.
              </CardText>
            </MissionCard>
            <MissionCard>
              <CardIcon>
                <Shield size={28} />
              </CardIcon>
              <CardTitle>Trusted & Verified</CardTitle>
              <CardText>
                All partner shelters are thoroughly vetted. Pet profiles are
                accurate, up-to-date, and include honest health histories.
              </CardText>
            </MissionCard>
            <MissionCard>
              <CardIcon>
                <Users size={28} />
              </CardIcon>
              <CardTitle>Community Driven</CardTitle>
              <CardText>
                Over 50,000 adopters have found their companions through
                PetGallery. Our community reviews help others make informed
                decisions.
              </CardText>
            </MissionCard>
            <MissionCard>
              <CardIcon>
                <Globe size={28} />
              </CardIcon>
              <CardTitle>Nationwide Network</CardTitle>
              <CardText>
                We connect pets and people across 48 states, with over 1,200
                partner shelters and rescue organizations.
              </CardText>
            </MissionCard>
            <MissionCard>
              <CardIcon>
                <Zap size={28} />
              </CardIcon>
              <CardTitle>Fast & Modern</CardTitle>
              <CardText>
                Built with the latest technology, our platform loads instantly
                and works beautifully on any device.
              </CardText>
            </MissionCard>
            <MissionCard>
              <CardIcon>
                <Star size={28} />
              </CardIcon>
              <CardTitle>5-Star Support</CardTitle>
              <CardText>
                Our dedicated team is here 7 days a week to help you through
                every step of the adoption journey.
              </CardText>
            </MissionCard>
          </MissionGrid>

          <StatsRow>
            <StatBox>
              <StatNum>50K+</StatNum>
              <StatDesc>Happy adoptions</StatDesc>
            </StatBox>
            <StatBox>
              <StatNum>1.2K</StatNum>
              <StatDesc>Partner shelters</StatDesc>
            </StatBox>
            <StatBox>
              <StatNum>48</StatNum>
              <StatDesc>States covered</StatDesc>
            </StatBox>
            <StatBox>
              <StatNum>4.9★</StatNum>
              <StatDesc>Average rating</StatDesc>
            </StatBox>
          </StatsRow>
        </SectionInner>
      </Section>

      <Section $bg={theme.colors.neutral50}>
        <SectionInner>
          <SectionLabel>Our Team</SectionLabel>
          <SectionTitle>The humans behind the mission</SectionTitle>
          <SectionSubtitle>
            A small but passionate team of animal lovers, technologists, and
            advocates.
          </SectionSubtitle>
          <TeamGrid>
            {teamMembers.map((m) => (
              <TeamCard key={m.name}>
                <Avatar src={m.img} alt={m.name} loading="lazy" />
                <TeamName>{m.name}</TeamName>
                <TeamRole>{m.role}</TeamRole>
              </TeamCard>
            ))}
          </TeamGrid>
        </SectionInner>
      </Section>

      <CTA>
        <CTATitle>Ready to find your companion?</CTATitle>
        <CTAText>
          Browse our gallery of pets and take the first step toward a forever
          friendship.
        </CTAText>
        <CTABtn to="/">
          <PawPrint size={18} />
          Browse Gallery
          <ArrowRight size={18} />
        </CTABtn>
      </CTA>
    </Page>
  );
}
