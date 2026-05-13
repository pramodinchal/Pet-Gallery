import { useEffect } from "react";
import styled from "styled-components";
import {
    PawPrint,
    RefreshCw,
    SearchX,
    AlertCircle,
} from "lucide-react";
import { theme } from "../styles/theme";
import { usePets } from "../hooks/usePets";
import { useFilteredPets } from "../hooks/useFilteredPets";
import { usePagination } from "../hooks/usePagination";
import { useFilters } from "../context/FilterContext";
import { PetCard } from "../components/PetCard";
import { SearchAndFilter } from "../components/SearchAndFilter";
import { SelectionBar } from "../components/SelectionBar";
import { LoadingGrid } from "../components/LoadingGrid";
import { Pagination } from "../components/Pagination";

const PAGE_SIZE = 8;

const Hero = styled.section`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary900} 0%,
    ${theme.colors.primary700} 60%,
    ${theme.colors.primary500} 100%
  );
  color: white;
  padding: 120px ${theme.spacing[6]} 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const HeroIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: ${theme.radii["2xl"]};
  margin-bottom: ${theme.spacing[5]};
  backdrop-filter: blur(8px);
`;

const HeroTitle = styled.h1`
  font-size: ${theme.typography.sizes["5xl"]};
  font-weight: ${theme.typography.weights.semibold};
  line-height: ${theme.typography.lineHeights.tight};
  margin-bottom: ${theme.spacing[4]};
  letter-spacing: -0.02em;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes["3xl"]};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.75);
  line-height: ${theme.typography.lineHeights.relaxed};
`;

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${theme.spacing[10]} ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[8]} ${theme.spacing[4]};
  }
`;

const FilterBar = styled.div`
  margin-bottom: ${theme.spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const ResultMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`;

const ResultCount = styled.span`
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.neutral500};
  font-weight: ${theme.typography.weights.medium};
`;

const ActiveFiltersRow = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
  flex-wrap: wrap;
`;

const FilterChip = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: ${theme.colors.primary50};
  color: ${theme.colors.primary700};
  border: 1px solid ${theme.colors.primary200};
  border-radius: ${theme.radii.full};
  font-size: ${theme.typography.sizes.xs};
  font-weight: ${theme.typography.weights.medium};
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.primary100};
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

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[20]} ${theme.spacing[4]};
  text-align: center;
  gap: ${theme.spacing[4]};
  color: ${theme.colors.neutral500};
`;

const StateTitle = styled.h3`
  font-size: ${theme.typography.sizes.xl};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.neutral700};
`;

const StateMsg = styled.p`
  font-size: ${theme.typography.sizes.base};
  max-width: 400px;
  line-height: ${theme.typography.lineHeights.relaxed};
`;

const RetryBtn = styled.button`
  display: flex;
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

export function GalleryPage() {
    const { pets, loading, error, isEmpty, refetch } = usePets();
    const { filters, setSearch, setSpecies, resetFilters } = useFilters();
    const filteredPets = useFilteredPets(pets, filters);
    const { currentItems, currentPage, totalPages, goToPage, nextPage, prevPage, hasNext, hasPrev } =
        usePagination(filteredPets, PAGE_SIZE);

    // Reset to page 1 when filters change
    useEffect(() => {
        goToPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]);

    const hasActiveFilters = filters.search || filters.species !== "all";

    return (
        <>
            <Hero>
                <HeroContent>
                    <HeroIcon>
                        <PawPrint size={36} color="white" />
                    </HeroIcon>
                    <HeroTitle>Find Your Perfect Companion</HeroTitle>
                    <HeroSubtitle>
                        Browse our gallery of adorable pets looking for their forever home.
                        Select favorites and download their photos.
                    </HeroSubtitle>
                </HeroContent>
            </Hero>

            <Main>
                <FilterBar>
                    <SearchAndFilter />
                    <ResultMeta>
                        <ResultCount>
                            {loading
                                ? "Loading..."
                                : `${filteredPets.length} pet${filteredPets.length !== 1 ? "s" : ""} found`}
                        </ResultCount>
                        {hasActiveFilters && (
                            <ActiveFiltersRow>
                                {filters.search && (
                                    <FilterChip onClick={() => setSearch("")}>
                                        "{filters.search}" ×
                                    </FilterChip>
                                )}
                                {filters.species !== "all" && (
                                    <FilterChip onClick={() => setSpecies("all")}>
                                        {filters.species}s ×
                                    </FilterChip>
                                )}
                                <FilterChip onClick={resetFilters}>Clear all ×</FilterChip>
                            </ActiveFiltersRow>
                        )}
                    </ResultMeta>
                </FilterBar>

                {loading && <LoadingGrid count={PAGE_SIZE} />}

                {error && (
                    <StateContainer>
                        <AlertCircle size={48} color={theme.colors.error500} />
                        <StateTitle>Failed to load pets</StateTitle>
                        <StateMsg>{error}</StateMsg>
                        <RetryBtn onClick={refetch}>
                            <RefreshCw size={16} />
                            Try again
                        </RetryBtn>
                    </StateContainer>
                )}

                {isEmpty && (
                    <StateContainer>
                        <PawPrint size={48} color={theme.colors.neutral300} />
                        <StateTitle>No pets available</StateTitle>
                        <StateMsg>Check back later — we update our listings regularly!</StateMsg>
                    </StateContainer>
                )}

                {!loading && !error && filteredPets.length === 0 && !isEmpty && (
                    <StateContainer>
                        <SearchX size={48} color={theme.colors.neutral300} />
                        <StateTitle>No results found</StateTitle>
                        <StateMsg>
                            Try adjusting your search or filters to find what you're looking for.
                        </StateMsg>
                        <RetryBtn onClick={resetFilters} style={{ background: theme.colors.neutral600 }}>
                            Reset filters
                        </RetryBtn>
                    </StateContainer>
                )}

                {!loading && !error && currentItems.length > 0 && (
                    <>
                        <Grid>
                            {currentItems.map((pet, i) => (
                                <PetCard
                                    key={pet.id || `${pet.title}-${i}`}
                                    pet={pet}
                                    index={i}
                                />
                            ))}
                        </Grid>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPage={goToPage}
                            onNext={nextPage}
                            onPrev={prevPage}
                            hasNext={hasNext}
                            hasPrev={hasPrev}
                        />
                    </>
                )}
            </Main>

            <SelectionBar allPets={pets} visiblePets={filteredPets} />
        </>
    );
}
