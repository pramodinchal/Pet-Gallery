import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { PawPrint, Menu, X } from "lucide-react";
import { theme } from "../styles/theme";
import { useSelection } from "../context/SelectionContext";

const Nav = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all ${theme.transitions.base};

  ${({ $scrolled }) =>
    $scrolled
      ? css`
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid ${theme.colors.neutral200};
          box-shadow: ${theme.shadows.sm};
        `
      : css`
          background: transparent;
        `}
`;

const NavInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[6]};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[4]};
  }
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  font-size: ${theme.typography.sizes.xl};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.primary700};
  transition: opacity ${theme.transitions.fast};

  &:hover {
    opacity: 0.8;
  }

  svg {
    color: ${theme.colors.primary500};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[1]};

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const NavItem = styled(NavLink)<{ $active?: boolean }>`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: ${theme.radii.full};
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
  color: ${theme.colors.neutral600};
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.neutral100};
    color: ${theme.colors.neutral900};
  }

  &.active {
    background: ${theme.colors.primary50};
    color: ${theme.colors.primary700};
  }
`;

const SelectionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  background: ${theme.colors.accent500};
  color: white;
  border-radius: ${theme.radii.full};
  font-size: 11px;
  font-weight: ${theme.typography.weights.semibold};
  margin-left: ${theme.spacing[1]};
`;

const MobileMenuBtn = styled.button`
  display: none;
  padding: ${theme.spacing[2]};
  border-radius: ${theme.radii.md};
  color: ${theme.colors.neutral700};
  transition: background ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.neutral100};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  padding: ${theme.spacing[4]};
  border-top: 1px solid ${theme.colors.neutral200};
  background: white;

  @media (max-width: ${theme.breakpoints.md}) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
`;

const MobileNavItem = styled(NavLink)`
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-radius: ${theme.radii.md};
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.medium};
  color: ${theme.colors.neutral600};
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.neutral50};
    color: ${theme.colors.neutral900};
  }

  &.active {
    background: ${theme.colors.primary50};
    color: ${theme.colors.primary700};
  }
`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { selectedCount } = useSelection();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";

  return (
    <Nav $scrolled={scrolled || !isHomePage}>
      <NavInner>
        <Logo to="/">
          <PawPrint size={24} />
          PetGallery
        </Logo>
        <NavLinks>
          <NavItem to="/">Gallery</NavItem>
          <NavItem to="/favorites">
            Favorites
            {selectedCount > 0 && (
              <SelectionBadge>{selectedCount}</SelectionBadge>
            )}
          </NavItem>
          <NavItem to="/about">About</NavItem>
        </NavLinks>
        <MobileMenuBtn onClick={() => setMobileOpen((o) => !o)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </MobileMenuBtn>
      </NavInner>
      <MobileMenu $open={mobileOpen}>
        <MobileNavItem to="/">Gallery</MobileNavItem>
        <MobileNavItem to="/favorites">
          Favorites {selectedCount > 0 && `(${selectedCount})`}
        </MobileNavItem>
        <MobileNavItem to="/about">About</MobileNavItem>
      </MobileMenu>
    </Nav>
  );
}
