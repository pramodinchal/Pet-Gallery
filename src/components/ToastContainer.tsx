import styled, { keyframes, css } from "styled-components";
import { CheckCircle, XCircle, Info, X } from "lucide-react";
import { theme } from "../styles/theme";
import { useToast } from "../context/ToastContext";

const slideIn = keyframes`
  from { transform: translateX(120%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const Container = styled.div`
  position: fixed;
  bottom: ${theme.spacing[6]};
  right: ${theme.spacing[6]};
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
  pointer-events: none;

  @media (max-width: ${theme.breakpoints.sm}) {
    left: ${theme.spacing[4]};
    right: ${theme.spacing[4]};
    bottom: ${theme.spacing[20]};
  }
`;

const Toast = styled.div<{ $type: "success" | "error" | "info" }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-radius: ${theme.radii.xl};
  box-shadow: ${theme.shadows.lg};
  pointer-events: all;
  animation: ${slideIn} 0.3s ease;
  max-width: 360px;
  min-width: 240px;

  ${({ $type }) => {
    switch ($type) {
      case "success":
        return css`
          background: ${theme.colors.success50};
          border: 1px solid ${theme.colors.success500}30;
          color: ${theme.colors.success700};
        `;
      case "error":
        return css`
          background: ${theme.colors.error50};
          border: 1px solid ${theme.colors.error500}30;
          color: ${theme.colors.error700};
        `;
      default:
        return css`
          background: white;
          border: 1px solid ${theme.colors.neutral200};
          color: ${theme.colors.neutral700};
        `;
    }
  }}
`;

const ToastMessage = styled.span`
  flex: 1;
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
`;

const CloseBtn = styled.button`
  opacity: 0.5;
  transition: opacity ${theme.transitions.fast};
  display: flex;

  &:hover {
    opacity: 1;
  }
`;

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <Container>
      {toasts.map((t) => (
        <Toast key={t.id} $type={t.type}>
          {t.type === "success" && <CheckCircle size={18} />}
          {t.type === "error" && <XCircle size={18} />}
          {t.type === "info" && <Info size={18} />}
          <ToastMessage>{t.message}</ToastMessage>
          <CloseBtn onClick={() => removeToast(t.id)}>
            <X size={14} />
          </CloseBtn>
        </Toast>
      ))}
    </Container>
  );
}
