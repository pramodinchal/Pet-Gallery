import { useParams, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Heart,
  Check,
  Weight,
  User,
  Tag,
  Share2,
  Download,
} from "lucide-react";
import { theme } from "../styles/theme";
import { usePet } from "../hooks/usePet";
import { useSelection } from "../context/SelectionContext";
import { useToast } from "../context/ToastContext";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  min-height: 100vh;
  background: ${theme.colors.neutral50};
  padding-top: 64px;
  animation: ${fadeIn} 0.35s ease;
`;

const BackBar = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${theme.spacing[6]} ${theme.spacing[6]} 0;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[4]} ${theme.spacing[4]} 0;
  }
`;

const BackBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  color: ${theme.colors.neutral500};
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border-radius: ${theme.radii.lg};
  transition: all ${theme.transitions.fast};

  &:hover {
    background: white;
    color: ${theme.colors.neutral900};
    box-shadow: ${theme.shadows.sm};
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${theme.spacing[6]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[10]};
  align-items: start;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[6]};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[4]};
  }
`;

const ImageSection = styled.div`
  position: sticky;
  top: 80px;

  @media (max-width: ${theme.breakpoints.lg}) {
    position: static;
  }
`;

const ImageWrapper = styled.div`
  border-radius: ${theme.radii["2xl"]};
  overflow: hidden;
  aspect-ratio: 4/3;
  box-shadow: ${theme.shadows.xl};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ActionRow = styled.div`
  display: flex;
  gap: ${theme.spacing[3]};
  margin-top: ${theme.spacing[4]};
`;

const ActionBtn = styled.button<{ $primary?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-radius: ${theme.radii.xl};
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.semibold};
  transition: all ${theme.transitions.fast};

  background: ${({ $primary }) =>
    $primary ? theme.colors.primary500 : "white"};
  color: ${({ $primary }) =>
    $primary ? "white" : theme.colors.neutral700};
  border: 1.5px solid ${({ $primary }) =>
    $primary ? theme.colors.primary500 : theme.colors.neutral200};
  box-shadow: ${theme.shadows.sm};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.md};
    background: ${({ $primary }) =>
      $primary ? theme.colors.primary400 : theme.colors.neutral50};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  background: ${theme.colors.success50};
  color: ${theme.colors.success700};
  border: 1px solid ${theme.colors.success500}40;
  border-radius: ${theme.radii.full};
  font-size: ${theme.typography.sizes.xs};
  font-weight: ${theme.typography.weights.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const SpeciesLabel = styled.span`
  display: inline-flex;
  padding: 4px 14px;
  background: ${theme.colors.primary50};
  color: ${theme.colors.primary700};
  border-radius: ${theme.radii.full};
  font-size: ${theme.typography.sizes.xs};
  font-weight: ${theme.typography.weights.semibold};
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const BadgeRow = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: ${theme.typography.sizes["4xl"]};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.neutral900};
  line-height: ${theme.typography.lineHeights.tight};
  letter-spacing: -0.02em;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes["3xl"]};
  }
`;

const Description = styled.p`
  font-size: ${theme.typography.sizes.base};
  color: ${theme.colors.neutral600};
  line-height: ${theme.typography.lineHeights.relaxed};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing[3]};
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[4]};
  background: white;
  border-radius: ${theme.radii.xl};
  border: 1px solid ${theme.colors.neutral100};
  box-shadow: ${theme.shadows.sm};
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.radii.lg};
  background: ${theme.colors.primary50};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary600};
  flex-shrink: 0;
`;

const StatContent = styled.div``;

const StatLabel = styled.div`
  font-size: ${theme.typography.sizes.xs};
  color: ${theme.colors.neutral400};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: ${theme.typography.weights.semibold};
`;

const StatValue = styled.div`
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.neutral800};
  margin-top: 2px;
`;

const TagSection = styled.div``;

const SectionLabel = styled.div`
  font-size: ${theme.typography.sizes.xs};
  color: ${theme.colors.neutral400};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: ${theme.typography.weights.semibold};
  margin-bottom: ${theme.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`;

const TagPill = styled.span`
  padding: 6px 14px;
  background: ${theme.colors.secondary50};
  color: ${theme.colors.secondary700};
  border: 1px solid ${theme.colors.secondary200};
  border-radius: ${theme.radii.full};
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
`;

const SkeletonWrapper = styled.div`
  padding-top: 64px;
`;

const Skeleton = styled.div`
  background: linear-gradient(
    90deg,
    ${theme.colors.neutral100} 25%,
    ${theme.colors.neutral200} 50%,
    ${theme.colors.neutral100} 75%
  );
  background-size: 800px 100%;
  border-radius: ${theme.radii.xl};
`;

export function PetDetailPage() {
  const { id } = useParams();
  const { pet, loading, error } = usePet(id);
  const { toggleSelect, isSelected } = useSelection();
  const { addToast } = useToast();

  if (loading) {
    return (
      <SkeletonWrapper>
        <BackBar>
          <BackBtn to="/">← Back to Gallery</BackBtn>
        </BackBar>
        <Container>
          <Skeleton style={{ aspectRatio: "4/3" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Skeleton style={{ height: 32, width: "60%" }} />
            <Skeleton style={{ height: 24, width: "40%" }} />
            <Skeleton style={{ height: 80 }} />
          </div>
        </Container>
      </SkeletonWrapper>
    );
  }

  if (error || !pet) {
    return (
      <SkeletonWrapper>
        <BackBar>
          <BackBtn to="/">← Back to Gallery</BackBtn>
        </BackBar>
        <div
          style={{
            textAlign: "center",
            padding: "80px 20px",
            color: theme.colors.neutral500,
          }}
        >
          <h2 style={{ fontSize: theme.typography.sizes["2xl"], marginBottom: 8 }}>
            Pet not found
          </h2>
          <p>{error}</p>
        </div>
      </SkeletonWrapper>
    );
  }

  const selected = isSelected(pet.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      addToast("Link copied to clipboard!", "success");
    });
  };

  const handleDownload = () => {
    addToast(`Downloading photo of ${pet.title}...`, "success");
  };

  return (
    <Page>
      <BackBar>
        <BackBtn to="/">
          <ArrowLeft size={16} />
          Back to Gallery
        </BackBtn>
      </BackBar>

      <Container>
        <ImageSection>
          <ImageWrapper>
            <Image src={pet.imageUrl} alt={pet.title} />
          </ImageWrapper>
          <ActionRow>
            <ActionBtn
              $primary={selected}
              onClick={() => toggleSelect(pet.id)}
            >
              {selected ? (
                <>
                  <Check size={16} /> Selected
                </>
              ) : (
                <>
                  <Heart size={16} /> Select
                </>
              )}
            </ActionBtn>
            <ActionBtn onClick={handleDownload}>
              <Download size={16} /> Download
            </ActionBtn>
            <ActionBtn onClick={handleShare} style={{ flex: "0 0 auto", width: 48 }}>
              <Share2 size={16} />
            </ActionBtn>
          </ActionRow>
        </ImageSection>

        <Info>
          <TitleRow>
            <BadgeRow>
              <StatusBadge>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: theme.colors.success500,
                    display: "inline-block",
                  }}
                />
                {pet.status}
              </StatusBadge>
              <SpeciesLabel>{pet.species}</SpeciesLabel>
            </BadgeRow>
            <Title>{pet.title}</Title>
          </TitleRow>

          <Description>{pet.description}</Description>

          <StatsGrid>
            <StatCard>
              <StatIcon>
                <User size={18} />
              </StatIcon>
              <StatContent>
                <StatLabel>Gender</StatLabel>
                <StatValue>{pet.gender}</StatValue>
              </StatContent>
            </StatCard>
            <StatCard>
              <StatIcon>
                <Calendar size={18} />
              </StatIcon>
              <StatContent>
                <StatLabel>Age</StatLabel>
                <StatValue>
                  {pet.age} year{pet.age !== 1 ? "s" : ""}
                </StatValue>
              </StatContent>
            </StatCard>
            <StatCard>
              <StatIcon>
                <Weight size={18} />
              </StatIcon>
              <StatContent>
                <StatLabel>Weight</StatLabel>
                <StatValue>{pet.weight}</StatValue>
              </StatContent>
            </StatCard>
            <StatCard>
              <StatIcon>
                <MapPin size={18} />
              </StatIcon>
              <StatContent>
                <StatLabel>Location</StatLabel>
                <StatValue>{pet.location}</StatValue>
              </StatContent>
            </StatCard>
          </StatsGrid>

          <div>
            <StatCard style={{ marginBottom: theme.spacing[3] }}>
              <StatIcon>
                <Tag size={18} />
              </StatIcon>
              <StatContent>
                <StatLabel>Breed</StatLabel>
                <StatValue>{pet.breed}</StatValue>
              </StatContent>
            </StatCard>
          </div>

          <TagSection>
            <SectionLabel>
              <Tag size={12} />
              Personality Traits
            </SectionLabel>
            <TagsRow>
              {pet.tags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </TagsRow>
          </TagSection>

          <div
            style={{
              fontSize: theme.typography.sizes.xs,
              color: theme.colors.neutral400,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Calendar size={12} />
            Listed on{" "}
            {new Date(pet.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </Info>
      </Container>
    </Page>
  );
}
