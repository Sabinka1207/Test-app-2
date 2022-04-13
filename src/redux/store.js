import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoSliceReducer from "./todoSlice";

// export default configureStore({
//   reducer: {
//     todo: todoSliceReducer,
//   },
// });

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  timeout: 500,
  key: "todo",
  storage,
};

export const store = configureStore({
  reducer: {
    todo: persistReducer(persistConfig, todoSliceReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
