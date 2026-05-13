import styled from "styled-components";
import { Search, Import as SortAsc, Filter, X } from "lucide-react";
import { theme } from "../styles/theme";
import { useFilters } from "../context/FilterContext";
import type { SortOption } from "../types";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[3]};
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  min-width: 220px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 ${theme.spacing[4]} 0 42px;
  background: white;
  border: 1.5px solid ${theme.colors.neutral200};
  border-radius: ${theme.radii.lg};
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.neutral800};
  transition: all ${theme.transitions.fast};
  outline: none;

  &::placeholder {
    color: ${theme.colors.neutral400};
  }

  &:focus {
    border-color: ${theme.colors.primary400};
    box-shadow: 0 0 0 3px ${theme.colors.primary100};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.neutral400};
  pointer-events: none;
  display: flex;
`;

const ClearBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: ${theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.neutral400};
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.neutral100};
    color: ${theme.colors.neutral700};
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SelectIcon = styled.div`
  position: absolute;
  left: 12px;
  pointer-events: none;
  color: ${theme.colors.neutral400};
  display: flex;
`;

const StyledSelect = styled.select`
  height: 44px;
  padding: 0 ${theme.spacing[4]} 0 36px;
  background: white;
  border: 1.5px solid ${theme.colors.neutral200};
  border-radius: ${theme.radii.lg};
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.neutral700};
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: all ${theme.transitions.fast};
  min-width: 160px;

  &:focus {
    border-color: ${theme.colors.primary400};
    box-shadow: 0 0 0 3px ${theme.colors.primary100};
  }

  &:hover {
    border-color: ${theme.colors.neutral300};
  }
`;

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "date-newest", label: "Newest First" },
  { value: "date-oldest", label: "Oldest First" },
  { value: "name-asc", label: "Name A–Z" },
  { value: "name-desc", label: "Name Z–A" },
];

const SPECIES_OPTIONS = ["all", "Dog", "Cat", "Bird", "Rabbit", "Small Animal"];

export function SearchAndFilter() {
  const { filters, setSearch, setSort, setSpecies } = useFilters();

  return (
    <Wrapper>
      <SearchBox>
        <SearchIcon>
          <Search size={16} />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search by name, breed, or tag..."
          value={filters.search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filters.search && (
          <ClearBtn onClick={() => setSearch("")}>
            <X size={14} />
          </ClearBtn>
        )}
      </SearchBox>

      <SelectWrapper>
        <SelectIcon>
          <Filter size={16} />
        </SelectIcon>
        <StyledSelect
          value={filters.species}
          onChange={(e) => setSpecies(e.target.value)}
        >
          {SPECIES_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s === "all" ? "All Species" : s + "s"}
            </option>
          ))}
        </StyledSelect>
      </SelectWrapper>

      <SelectWrapper>
        <SelectIcon>
          <SortAsc size={16} />
        </SelectIcon>
        <StyledSelect
          value={filters.sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </StyledSelect>
      </SelectWrapper>
    </Wrapper>
  );
}
