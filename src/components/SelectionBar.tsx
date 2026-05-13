import styled, { keyframes, css } from "styled-components";
import { Download, CheckSquare, Square, X, Image as ImageIcon } from "lucide-react";
import { theme } from "../styles/theme";
import { useSelection } from "../context/SelectionContext";
import { useToast } from "../context/ToastContext";
import type { Pet } from "../types";

const slideUp = keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Bar = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: ${theme.spacing[6]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[3]} ${theme.spacing[5]};
  background: ${theme.colors.neutral900};
  color: white;
  border-radius: ${theme.radii["2xl"]};
  box-shadow: ${theme.shadows.xl};
  white-space: nowrap;

  ${({ $visible }) =>
        $visible
            ? css`
          animation: ${slideUp} 0.25s ease both;
        `
            : css`
          display: none;
        `}

  @media (max-width: ${theme.breakpoints.sm}) {
    left: ${theme.spacing[4]};
    right: ${theme.spacing[4]};
    transform: none;
    flex-wrap: wrap;
    white-space: normal;
  }
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.semibold};
  padding-right: ${theme.spacing[3]};
  border-right: 1px solid rgba(255, 255, 255, 0.15);
`;

const SizeLabel = styled.span`
  font-size: ${theme.typography.sizes.xs};
  color: rgba(255, 255, 255, 0.55);
  margin-left: 4px;
  font-weight: ${theme.typography.weights.regular};
`;

const BarBtn = styled.button<{ $variant?: "primary" | "ghost" | "danger" }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border-radius: ${theme.radii.lg};
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
  transition: all ${theme.transitions.fast};

  ${({ $variant = "ghost" }) => {
        switch ($variant) {
            case "primary":
                return css`
          background: ${theme.colors.primary500};
          color: white;
          &:hover {
            background: ${theme.colors.primary400};
          }
        `;
            case "danger":
                return css`
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          &:hover {
            background: rgba(255, 255, 255, 0.08);
            color: white;
          }
        `;
            default:
                return css`
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.85);
          &:hover {
            background: rgba(255, 255, 255, 0.18);
            color: white;
          }
        `;
        }
    }}
`;

function formatSize(kb: number): string {
    if (kb >= 1024) return `${(kb / 1024).toFixed(1)} MB`;
    return `${kb} KB`;
}

interface SelectionBarProps {
    allPets: Pet[];
    visiblePets: Pet[];
}

export function SelectionBar({ allPets, visiblePets }: SelectionBarProps) {
    const { selectedCount, clearSelection, selectAll, totalFileSizeKb } =
        useSelection();
    const { addToast } = useToast();

    const sizeKb = totalFileSizeKb(allPets);
    const allSelected =
        visiblePets.length > 0 &&
        visiblePets.every((p) => allPets.find((a) => a.id === p.id));

    const handleDownload = () => {
        addToast(
            `Downloading ${selectedCount} image${selectedCount !== 1 ? "s" : ""} (${formatSize(sizeKb)})`,
            "success"
        );
    };

    return (
        <Bar $visible={selectedCount > 0}>
            <Count>
                <ImageIcon size={16} />
                {selectedCount} selected
                <SizeLabel>~{formatSize(sizeKb)}</SizeLabel>
            </Count>

            <BarBtn onClick={() => selectAll(visiblePets)}>
                {allSelected ? <Square size={15} /> : <CheckSquare size={15} />}
                {allSelected ? "Selected" : "Select All"}
            </BarBtn>

            <BarBtn onClick={clearSelection} $variant="ghost">
                <Square size={15} />
                Clear
            </BarBtn>

            <BarBtn $variant="primary" onClick={handleDownload}>
                <Download size={15} />
                Download
            </BarBtn>

            <BarBtn $variant="danger" onClick={clearSelection}>
                <X size={15} />
            </BarBtn>
        </Bar>
    );
}
