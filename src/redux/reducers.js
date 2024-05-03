import { createReducer } from "@reduxjs/toolkit";

export const getProductsReducer = createReducer({}, (builder) => {
  builder
    .addCase("request", (state) => {
      state.loading = true;
    })
    .addCase("success", (state, action) => {
      state.loading = false;
      state.products = action.Payload;
      state.message = action.message;
    })
    .addCase("error", (state, action) => {
      state.loading = false;
      state.message = action.message;
    })
    .addCase("removeError", (state) => {
      state.message = null;
    });
});

export const addProductReducer = createReducer({}, (builder) => {
    builder
      .addCase("Request", (state) => {
        state.loading = true;
      })
      .addCase("Success", (state, action) => {
        state.loading = false;
        state.message = action.message;
        state.data = action.Payload
      })
      .addCase("error", (state, action) => {
        state.loading = false;
        state.message = action.message;
      })
  });