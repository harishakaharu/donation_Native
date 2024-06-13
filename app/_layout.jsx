import { Stack } from "expo-router";
import React from "react";
import store, { persistedStore } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const rootLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack>
      </PersistGate>
    </Provider>
  );
};

export default rootLayout;
