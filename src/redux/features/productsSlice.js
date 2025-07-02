import baseApi from "../api/baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => ({
        url: "api/products/detail/",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
   
  }),
});

export const { useAllProductsQuery } = productsApi;
