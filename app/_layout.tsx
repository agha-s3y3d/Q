import "../global.css"; // این خط خیلی مهمه - نگه‌دار

import * as React from "react";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { View, Text, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";

// ---------------- Error Boundary ----------------
type ErrorBoundaryState = { hasError: boolean; error: unknown };

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error("App crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      const message =
        this.state.error instanceof Error
          ? this.state.error.message
          : String(this.state.error);
      return (
        <View className="flex-1 items-center justify-center bg-white p-6">
          <Text className="text-red-600 text-center font-bold mb-2">
            یه خطا پیش اومد
          </Text>
          <Text className="text-gray-700 text-center text-xs">{message}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

// ---------------- فونت‌ها ----------------
// این هوک رو اینجا صدا می‌زنیم (تو خود لایه‌ی روت)، نه تو هر صفحه جداگانه،
// چون _layout فقط یه بار مونت می‌شه و همه‌ی صفحه‌ها زیرش هستن.
export function useEstedadFonts() {
  const [fontsLoaded, fontError] = useFonts({
    EstedadLight: require("../assets/Fonts/Estedad-FD-Light.ttf"),
    EstedadRegular: require("../assets/Fonts/Estedad-FD-Regular.ttf"),
    EstedadMedium: require("../assets/Fonts/Estedad-FD-Medium.ttf"),
    EstedadBold: require("../assets/Fonts/Estedad-FD-Bold.ttf"),
    EstedadBlack: require("../assets/Fonts/Estedad-FD-Black.ttf"),
  });

  useEffect(() => {
    if (fontError) {
      console.error("خطا در لود فونت:", fontError);
    }
  }, [fontError]);

  return fontsLoaded || !!fontError;
}

function LoadingScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="large" />
    </View>
  );
}

export default function RootLayout() {
  const fontsReady = useEstedadFonts();

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        {!fontsReady ? (
          <LoadingScreen />
        ) : (
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="students" />
            <Stack.Screen name="add-students" />
          </Stack>
        )}
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
