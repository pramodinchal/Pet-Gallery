import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Heart, Download, Trash2, ArrowLeft, Image as ImageIcon } from "lucide-react";
import { theme } from "../styles/theme";
import { useSelection } from "../context/SelectionContext";
import { useToast } from "../context/ToastContext";
import { usePets } from "../hooks/usePets";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  min-height: 100vh;
  padding-top: 64px;
  background: ${theme.colors.neutral50};
`;

const Header = styled.div`
  background: white;
  border-bottom: 1px solid ${theme.colors.neutral100};
  padding: ${theme.spacing[8]} ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[6]} ${theme.spacing[4]};
  }
`;

const HeaderInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing[4]};
`;

const TitleGroup = styled.div``;

const PageTitle = styled.h1`
  font-size: ${theme.typography.sizes["3xl"]};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.neutral900};
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  color: ${theme.colors.neutral500};
  font-size: ${theme.typography.sizes.sm};
  margin-top: ${theme.spacing[1]};
`;

const HeaderActions = styled.div`
  display: flex;
  gap: ${theme.spacing[3]};
  flex-wrap: wrap;
`;

const Btn = styled.button<{ $variant?: "primary" | "danger" | "default" }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: ${theme.radii.lg};
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
  border: 1.5px solid transparent;
  transition: all ${theme.transitions.fast};

  ${({ $variant = "default" }) => {
    switch ($variant) {
      case "primary":
        return `
          background: ${theme.colors.primary500};
          color: white;
          &:hover { background: ${theme.colors.primary400}; }
        `;
      case "danger":
        return `
          background: ${theme.colors.error50};
          color: ${theme.colors.error500};
          border-color: ${theme.colors.error50};
          &:hover { background: ${theme.colors.error500}; color: white; }
        `;
      default:
        return `
          background: white;
          color: ${theme.colors.neutral700};
          border-color: ${theme.colors.neutral200};
          box-shadow: ${theme.shadows.sm};
          &:hover { background: ${theme.colors.neutral50}; }
        `;
    }
  }}
`;

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${theme.spacing[8]} ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[6]} ${theme.spacing[4]};
  }
`;

const StatsBar = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[8]};
  flex-wrap: wrap;
`;

const StatPill = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  background: white;
  border: 1px solid ${theme.colors.neutral200};
  border-radius: ${theme.radii.xl};
  box-shadow: ${theme.shadows.sm};
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.neutral700};

  strong {
    color: ${theme.colors.neutral900};
    font-weight: ${theme.typography.weights.semibold};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FavCard = styled.div`
  background: white;
  border-radius: ${theme.radii.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
  transition: all ${theme.transitions.base};
  animation: ${fadeIn} 0.3s ease both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.cardHover};
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: ${theme.spacing[4]};
`;

const CardTitle = styled.h3`
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.neutral900};
  margin-bottom: 2px;
`;

const CardSub = styled.p`
  font-size: ${theme.typography.sizes.xs};
  color: ${theme.colors.neutral500};
  margin-bottom: ${theme.spacing[3]};
`;

const CardActions = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
`;

const CardBtn = styled.button<{ $danger?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 0;
  border-radius: ${theme.radii.md};
  font-size: ${theme.typography.sizes.xs};
  font-weight: ${theme.typography.weights.medium};
  border: 1px solid;
  transition: all ${theme.transitions.fast};

  ${({ $danger }) =>
    $danger
      ? `
    border-color: ${theme.colors.error50};
    color: ${theme.colors.error500};
    background: ${theme.colors.error50};
    &:hover { background: ${theme.colors.error500}; color: white; }
  `
      : `
    border-color: ${theme.colors.neutral200};
    color: ${theme.colors.neutral600};
    background: ${theme.colors.neutral50};
    &:hover { background: ${theme.colors.primary50}; color: ${theme.colors.primary700}; border-color: ${theme.colors.primary200}; }
  `}
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing[20]} ${theme.spacing[4]};
  text-align: center;
  gap: ${theme.spacing[4]};
`;

const EmptyTitle = styled.h3`
  font-size: ${theme.typography.sizes.xl};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.neutral700};
`;

const EmptyText = styled.p`
  color: ${theme.colors.neutral500};
  max-width: 360px;
  line-height: ${theme.typography.lineHeights.relaxed};
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  background: ${theme.colors.primary500};
  color: white;
  border-radius: ${theme.radii.lg};
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
  transition: background ${theme.transitions.fast};
  margin-top: ${theme.spacing[2]};

  &:hover {
    background: ${theme.colors.primary400};
  }
`;

function formatSize(kb: number): string {
  if (kb >= 1024) return `${(kb / 1024).toFixed(1)} MB`;
  return `${kb} KB`;
}

export function FavoritesPage() {
  const { pets } = usePets();
  const { selectedIds, toggleSelect, clearSelection, totalFileSizeKb } =
    useSelection();
  const { addToast } = useToast();

  const selectedPets = pets.filter((p) => selectedIds.has(p.id));
  const sizeKb = totalFileSizeKb(pets);

  const handleDownloadAll = () => {
    addToast(
      `Downloading ${selectedPets.length} image${selectedPets.length !== 1 ? "s" : ""} (${formatSize(sizeKb)})`,
      "success"
    );
  };

  const handleRemove = (id: string) => {
    toggleSelect(id);
    addToast("Removed from favorites", "info");
  };

  return (
    <Page>
      <Header>
        <HeaderInner>
          <TitleGroup>
            <PageTitle>
              <Heart
                size={28}
                style={{
                  display: "inline",
                  verticalAlign: "middle",
                  marginRight: 8,
                  color: theme.colors.accent500,
                }}
              />
              My Favorites
            </PageTitle>
            <Subtitle>
              {selectedPets.length > 0
                ? `${selectedPets.length} pet${selectedPets.length !== 1 ? "s" : ""} selected · ~${formatSize(sizeKb)} total`
                : "No pets selected yet"}
            </Subtitle>
          </TitleGroup>
          {selectedPets.length > 0 && (
            <HeaderActions>
              <Btn $variant="primary" onClick={handleDownloadAll}>
                <Download size={15} />
                Download All
              </Btn>
              <Btn $variant="danger" onClick={clearSelection}>
                <Trash2 size={15} />
                Clear All
              </Btn>
            </HeaderActions>
          )}
        </HeaderInner>
      </Header>

      <Main>
        {selectedPets.length > 0 && (
          <StatsBar>
            <StatPill>
              <ImageIcon size={15} color={theme.colors.primary500} />
              <strong>{selectedPets.length}</strong> selected
            </StatPill>
            <StatPill>
              <Download size={15} color={theme.colors.secondary500} />
              Estimated size: <strong>{formatSize(sizeKb)}</strong>
            </StatPill>
          </StatsBar>
        )}

        {selectedPets.length === 0 ? (
          <EmptyState>
            <Heart size={56} color={theme.colors.neutral200} />
            <EmptyTitle>No favorites yet</EmptyTitle>
            <EmptyText>
              Browse the gallery and click the heart icon on any pet to add them
              to your favorites list.
            </EmptyText>
            <BackLink to="/">
              <ArrowLeft size={16} />
              Browse Gallery
            </BackLink>
          </EmptyState>
        ) : (
          <Grid>
            {selectedPets.map((pet, i) => (
              <FavCard key={pet.id} style={{ animationDelay: `${i * 40}ms` }}>
                <Link to={`/pets/${pet.id}`}>
                  <CardImage src={pet.imageUrl} alt={pet.title} loading="lazy" />
                </Link>
                <CardBody>
                  <CardTitle>{pet.title}</CardTitle>
                  <CardSub>
                    {pet.breed} · {pet.location}
                  </CardSub>
                  <CardActions>
                    <CardBtn
                      onClick={() =>
                        addToast(`Downloading ${pet.title}...`, "success")
                      }
                    >
                      <Download size={12} />
                      Download
                    </CardBtn>
                    <CardBtn $danger onClick={() => handleRemove(pet.id)}>
                      <Trash2 size={12} />
                      Remove
                    </CardBtn>
                  </CardActions>
                </CardBody>
              </FavCard>
            ))}
          </Grid>
        )}
      </Main>
    </Page>
  );
}
