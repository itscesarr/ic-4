import { Color, Radii, Spacing } from "design_component";

export { Color, Radii, Spacing };

export const colors = {
  background: Color.background.secondary,
  divider: Color.border.secondary,
  green: Color.foreground.successPrimary,
  muted: Color.text.tertiary600,
  surface: Color.background.primary,
  text: Color.text.primary900,
  white: Color.text.white,
};

export const difficultyColor = (difficulty) => ({
  easy: Color.background.successSolid,
  moderate: Color.background.warningSolid,
  hard: Color.background.errorSolid,
}[difficulty] ?? Color.text.tertiary600);

export const formatTime = (minutes) => { const hours = Math.floor(minutes / 60); const remaining = minutes % 60; return hours ? `${hours}h ${remaining ? `${remaining}m` : ""}`.trim() : `${remaining}m`; };
export const formatDistance = (miles, units) => units === "metric" ? `${(miles * 1.60934).toFixed(1)} km` : `${miles.toFixed(1)} mi`;
export const formatElevation = (feet, units) => units === "metric" ? `${Math.round(feet * 0.3048)} m` : `${Math.round(feet).toLocaleString()} ft`;
