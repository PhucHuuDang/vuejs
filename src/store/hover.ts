import { ref } from "vue";

export type HoveredCard = {
  logo: string;
  title?: string;
  description?: string;
  key?: string;
};

const hoveredCard = ref<HoveredCard | null>(null);

export const useMouseEnter = () => {
  const handleMouseEnter = (card: HoveredCard) => {
    hoveredCard.value = card;
  };

  return { hoveredCard, handleMouseEnter };
};

export const useMouseLeave = () => {
  return () => (hoveredCard.value = null);
};
