import { Stack } from "expo-router";
import { TrailMateProvider } from "../../components/trail-mate-store";

export default function RootLayout() {
  return (
    <TrailMateProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="about" options={{ presentation: "modal" }} />
        <Stack.Screen name="signed-out" />
      </Stack>
    </TrailMateProvider>
  );
}
