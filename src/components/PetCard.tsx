import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { Check, MapPin, Calendar, Heart } from "lucide-react";
import { theme } from "../styles/theme";
import type { Pet } from "../types";
import { useSelection } from "../context/SelectionContext";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Card = styled.article<{ $selected: boolean }>`
  position: relative;
  border-radius: ${theme.radii.xl};
  overflow: hidden;
  background: white;
  box-shadow: ${theme.shadows.card};
  transition: all ${theme.transitions.base};
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease both;

  &:hover {
    box-shadow: ${theme.shadows.cardHover};
    transform: translateY(-3px);
  }

  ${({ $selected }) =>
    $selected &&
    css`
      box-shadow: 0 0 0 3px ${theme.colors.primary500},
        ${theme.shadows.cardHover};
      transform: translateY(-3px);
    `}
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: ${theme.colors.neutral100};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.transitions.slow};

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(0, 0, 0, 0.55) 100%
  );
  opacity: 0;
  transition: opacity ${theme.transitions.base};

  ${Card}:hover & {
    opacity: 1;
  }
`;


const CheckBtn = styled.button<{ $selected: boolean }>`
  position: absolute;
  top: ${theme.spacing[3]};
  right: ${theme.spacing[3]};
  width: 32px;
  height: 32px;
  border-radius: ${theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${theme.transitions.fast};
  z-index: 2;

  ${({ $selected }) =>
    $selected
      ? css`
          background: ${theme.colors.primary500};
          box-shadow: 0 2px 8px rgba(20, 184, 166, 0.5);
        `
      : css`
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          opacity: 0;

          ${Card}:hover & {
            opacity: 1;
          }
        `}

  &:hover {
    transform: scale(1.1);
  }
`;

const CardBody = styled.div`
  padding: ${theme.spacing[4]};
`;

const CardTitle = styled.h3`
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.neutral900};
  margin-bottom: ${theme.spacing[1]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardBreed = styled.p`
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.neutral500};
  margin-bottom: ${theme.spacing[3]};
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${theme.typography.sizes.xs};
  color: ${theme.colors.neutral500};
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    flex-shrink: 0;
  }
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: ${theme.spacing[3]};
`;

const Tag = styled.span`
  padding: 2px 8px;
  background: ${theme.colors.primary50};
  color: ${theme.colors.primary700};
  border-radius: ${theme.radii.full};
  font-size: 11px;
  font-weight: ${theme.typography.weights.medium};
`;

interface PetCardProps {
  pet: Pet;
  index?: number;
}

export function PetCard({ pet, index = 0 }: PetCardProps) {
  const navigate = useNavigate();
  const { toggleSelect, isSelected } = useSelection();
  const [imgLoaded, setImgLoaded] = useState(false);
  const selected = isSelected(pet.id);

  const handleCheckClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSelect(pet.id);
  };

  const formattedDate = new Date(pet.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card
      $selected={selected}
      onClick={() => navigate(`/pets/${pet.id}`)}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <ImageWrapper>
        <Image
          src={pet.imageUrl}
          alt={pet.title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          style={{ opacity: imgLoaded ? 1 : 0, transition: "opacity 0.3s" }}
        />
        {!imgLoaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: theme.colors.neutral100,
            }}
          />
        )}
        <ImageOverlay />
        <CheckBtn $selected={selected} onClick={handleCheckClick}>
          {selected ? (
            <Check size={16} color="white" strokeWidth={2.5} />
          ) : (
            <Heart size={16} color={theme.colors.neutral600} />
          )}
        </CheckBtn>
      </ImageWrapper>
      <CardBody>
        <CardTitle title={pet.title}>{pet.title}</CardTitle>
        <CardBreed>
          {pet.breed} · {pet.age} yr{pet.age !== 1 ? "s" : ""} · {pet.gender}
        </CardBreed>
        <CardMeta>
          <MetaItem>
            <MapPin size={12} />
          {pet.location?.split(",")[0] || "Unknown"}
          </MetaItem>
          <MetaItem>
            <Calendar size={12} />
            {formattedDate}
          </MetaItem>
        </CardMeta>
        <TagRow>
         {pet.tags?.slice(0, 2).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagRow>
      </CardBody>
    </Card>
  );
}
