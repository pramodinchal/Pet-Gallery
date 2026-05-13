import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
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

const SkeletonCard = styled.div`
  border-radius: ${theme.radii.xl};
  overflow: hidden;
  background: white;
  box-shadow: ${theme.shadows.card};
`;

const SkeletonImage = styled.div`
  aspect-ratio: 4/3;
  background: linear-gradient(
    90deg,
    ${theme.colors.neutral100} 25%,
    ${theme.colors.neutral200} 50%,
    ${theme.colors.neutral100} 75%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonBody = styled.div`
  padding: ${theme.spacing[4]};
`;

const SkeletonLine = styled.div<{ $width?: string; $height?: string }>`
  height: ${({ $height }) => $height || "14px"};
  width: ${({ $width }) => $width || "100%"};
  border-radius: ${theme.radii.sm};
  background: linear-gradient(
    90deg,
    ${theme.colors.neutral100} 25%,
    ${theme.colors.neutral200} 50%,
    ${theme.colors.neutral100} 75%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  margin-bottom: ${theme.spacing[2]};
`;

export function LoadingGrid({ count = 8 }: { count?: number }) {
  return (
    <Grid>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i}>
          <SkeletonImage />
          <SkeletonBody>
            <SkeletonLine $width="75%" $height="16px" />
            <SkeletonLine $width="50%" />
            <SkeletonLine $width="90%" />
          </SkeletonBody>
        </SkeletonCard>
      ))}
    </Grid>
  );
}
