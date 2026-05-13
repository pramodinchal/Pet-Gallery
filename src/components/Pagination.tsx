import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { theme } from "../styles/theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[8]} 0;
`;

const PageBtn = styled.button<{ $active?: boolean; $arrow?: boolean }>`
  min-width: 40px;
  height: 40px;
  padding: 0 ${({ $arrow }) => ($arrow ? "10px" : "4px")};
  border-radius: ${theme.radii.lg};
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${({ $active }) =>
    $active
      ? theme.typography.weights.semibold
      : theme.typography.weights.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${theme.transitions.fast};

  background: ${({ $active }) =>
    $active ? theme.colors.primary500 : "white"};
  color: ${({ $active }) =>
    $active ? "white" : theme.colors.neutral600};
  border: 1.5px solid ${({ $active }) =>
    $active ? theme.colors.primary500 : theme.colors.neutral200};
  box-shadow: ${({ $active }) => ($active ? "none" : theme.shadows.sm)};

  &:hover:not(:disabled) {
    background: ${({ $active }) =>
      $active ? theme.colors.primary400 : theme.colors.neutral50};
    border-color: ${({ $active }) =>
      $active ? theme.colors.primary400 : theme.colors.neutral300};
    color: ${({ $active }) => ($active ? "white" : theme.colors.neutral900)};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const Ellipsis = styled.span`
  color: ${theme.colors.neutral400};
  font-size: ${theme.typography.sizes.sm};
  padding: 0 4px;
`;

const PageInfo = styled.span`
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.neutral500};
  padding: 0 ${theme.spacing[2]};
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPage: (page: number) => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [1];
  if (current > 3) pages.push("...");
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i);
  }
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  onPage,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <Wrapper>
      <PageBtn $arrow onClick={onPrev} disabled={!hasPrev}>
        <ChevronLeft size={16} />
      </PageBtn>

      {pages.map((page, i) =>
        page === "..." ? (
          <Ellipsis key={`ellipsis-${i}`}>...</Ellipsis>
        ) : (
          <PageBtn
            key={page}
            $active={page === currentPage}
            onClick={() => onPage(page as number)}
          >
            {page}
          </PageBtn>
        )
      )}

      <PageBtn $arrow onClick={onNext} disabled={!hasNext}>
        <ChevronRight size={16} />
      </PageBtn>

      <PageInfo>
        {currentPage} / {totalPages}
      </PageInfo>
    </Wrapper>
  );
}
